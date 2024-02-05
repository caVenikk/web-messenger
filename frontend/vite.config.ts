import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        // @quasar/plugin-vite options list:
        // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
        quasar({
            sassVariables: 'src/quasar-variables.sass',
        }),
    ],
});
