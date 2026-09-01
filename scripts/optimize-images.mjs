import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = path.join('assets', 'images');
const outputDir = path.join(sourceDir, 'optimized');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const minSize = 50 * 1024;

await fs.mkdir(outputDir, { recursive: true });

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (fullPath.startsWith(outputDir)) continue;
      files.push(...await listImages(fullPath));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!supportedExtensions.has(ext)) continue;

    const stats = await fs.stat(fullPath);
    if (stats.size < minSize) continue;

    files.push(fullPath);
  }

  return files;
}

for (const input of await listImages(sourceDir)) {
  const relative = path.relative(sourceDir, input);
  const parsed = path.parse(relative);
  const extName = parsed.ext.slice(1).toLowerCase();
  const output = path.join(outputDir, parsed.dir, `${parsed.name}-${extName}.webp`);

  try {
    await fs.mkdir(path.dirname(output), { recursive: true });

    await sharp(input, { animated: true })
      .rotate()
      .webp({ quality: 82, effort: 6 })
      .toFile(output);

    const original = (await fs.stat(input)).size;
    const optimized = (await fs.stat(output)).size;
    const saved = original - optimized;
    const percent = Math.round((saved / original) * 100);

    console.log(`${relative} -> optimized/${path.join(parsed.dir, `${parsed.name}-${extName}.webp`)} (${percent}% menor)`);
  } catch (error) {
    console.warn(`Pulando ${relative}: ${error.message}`);
  }
}
