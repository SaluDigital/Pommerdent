import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                // Páginas principais
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                contato: resolve(__dirname, 'contato.html'),
                diferenciais: resolve(__dirname, 'diferenciais.html'),
                equipe: resolve(__dirname, 'equipe.html'),
                sobre: resolve(__dirname, 'sobre.html'),
                tratamentos: resolve(__dirname, 'tratamentos.html'),
                // Tratamentos
                'reabilitacao-oral': resolve(__dirname, 'tratamentos/reabilitacao-oral.html'),
                'harmonizacao-facial': resolve(__dirname, 'tratamentos/harmonizacao-facial.html'),
                'implantes': resolve(__dirname, 'tratamentos/implantes.html'),
                'ortodontia': resolve(__dirname, 'tratamentos/ortodontia.html'),
                'lentes-contato': resolve(__dirname, 'tratamentos/lentes-contato.html'),
                'clareamento': resolve(__dirname, 'tratamentos/clareamento.html'),
                'odontopediatria': resolve(__dirname, 'tratamentos/odontopediatria.html'),
                'endodontia': resolve(__dirname, 'tratamentos/endodontia.html'),
                // Posts do blog
                'reabilitacao-saude': resolve(__dirname, 'post/reabilitacao-saude.html'),
                'harmonizacao-natural': resolve(__dirname, 'post/harmonizacao-natural.html'),
                'scanner-dental': resolve(__dirname, 'post/scanner-dental.html'),
            },
        },
    },
});
