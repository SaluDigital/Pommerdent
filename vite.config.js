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
                sobre: resolve(__dirname, 'sobre.html'),
                tratamentos: resolve(__dirname, 'tratamentos.html'),
                'tratamentos-odontologicos': resolve(__dirname, 'tratamentos-odontologicos.html'),
                'tratamentos-esteticos': resolve(__dirname, 'tratamentos-esteticos.html'),

                // Tratamentos
                'reabilitacao-oral': resolve(__dirname, 'tratamentos/reabilitacao-oral.html'),
                'harmonizacao-facial': resolve(__dirname, 'tratamentos/harmonizacao-facial.html'),
                'implantes': resolve(__dirname, 'tratamentos/implantes.html'),
                'ortodontia': resolve(__dirname, 'tratamentos/ortodontia.html'),
                'lentes-contato': resolve(__dirname, 'tratamentos/lentes-contato.html'),
                'clareamento': resolve(__dirname, 'tratamentos/clareamento.html'),
                'odontopediatria': resolve(__dirname, 'tratamentos/odontopediatria.html'),
                'endodontia': resolve(__dirname, 'tratamentos/endodontia.html'),
                'depilacao-laser': resolve(__dirname, 'tratamentos/depilacao-laser.html'),
                'estetica-corporal': resolve(__dirname, 'tratamentos/estetica-corporal.html'),
                'limpeza-pele': resolve(__dirname, 'tratamentos/limpeza-pele.html'),
                'peim': resolve(__dirname, 'tratamentos/peim.html'),
                'periodontia': resolve(__dirname, 'tratamentos/periodontia.html'),
                'terapia-capilar': resolve(__dirname, 'tratamentos/terapia-capilar.html'),

                // Posts do blog
                'reabilitacao-saude': resolve(__dirname, 'post/reabilitacao-saude.html'),
                'harmonizacao-natural': resolve(__dirname, 'post/harmonizacao-natural.html'),

                // Landing Pages
                'lp-protesedentaria': resolve(__dirname, 'lp_protesedentaria.html'),
            },
        },
    },
});
