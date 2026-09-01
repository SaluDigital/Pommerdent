import fs from 'node:fs';
import path from 'node:path';

const imageDir = path.join('assets', 'images');
const optimizedDir = path.join(imageDir, 'optimized');
const sourceExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

function toWebPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function listWebps(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...listWebps(fullPath));
    } else if (entry.name.toLowerCase().endsWith('.webp')) {
      files.push(fullPath);
    }
  }

  return files;
}

const replacements = {};

for (const optimizedPath of listWebps(optimizedDir)) {
  const relative = path.relative(optimizedDir, optimizedPath);
  const parsed = path.parse(relative);
  const suffixMatch = parsed.name.match(/^(.*)-(jpg|jpeg|png)$/i);
  if (!suffixMatch) continue;

  const sourceName = suffixMatch[1];
  const sourceExt = `.${suffixMatch[2]}`;
  const target = toWebPath(path.join(imageDir, 'optimized', relative));
  const source = toWebPath(path.join(imageDir, parsed.dir, `${sourceName}${sourceExt}`));
  const sourceUpper = toWebPath(path.join(imageDir, parsed.dir, `${sourceName}${sourceExt.toUpperCase()}`));
  const previousTarget = toWebPath(path.join(imageDir, 'optimized', parsed.dir, `${sourceName}.webp`));

  replacements[source] = target;
  replacements[sourceUpper] = target;
  replacements[previousTarget] = target;
}

const files = [
  ...fs.readdirSync('.').filter((file) => file.endsWith('.html')),
  ...fs.readdirSync('tratamentos').filter((file) => file.endsWith('.html')).map((file) => `tratamentos/${file}`),
  ...fs.readdirSync('post').filter((file) => file.endsWith('.html')).map((file) => `post/${file}`),
  'css/style.css',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  for (const [from, to] of Object.entries(replacements)) {
    content = content.split(from).join(to);
    content = content.split(`../${from}`).join(`../${to}`);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Atualizado: ${file}`);
  }
}
