import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                blog: resolve(__dirname, 'blog.html'),
                contato: resolve(__dirname, 'contato.html'),
                diferenciais: resolve(__dirname, 'diferenciais.html'),
                equipe: resolve(__dirname, 'equipe.html'),
                sobre: resolve(__dirname, 'sobre.html'),
                tratamentos: resolve(__dirname, 'tratamentos.html'),
                'reabilitacao-oral': resolve(__dirname, 'tratamentos/reabilitacao-oral.html'),
                'harmonizacao-facial': resolve(__dirname, 'tratamentos/harmonizacao-facial.html'),
                'implantes': resolve(__dirname, 'tratamentos/implantes.html'),
                'ortodontia': resolve(__dirname, 'tratamentos/ortodontia.html'),
                'reabilitacao-saude': resolve(__dirname, 'post/reabilitacao-saude.html'),
            },
        },
    },
});
