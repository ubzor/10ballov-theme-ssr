import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import * as path from 'path'

process.env = { ...process.env, ...loadEnv('', '.') }

export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './') },
            { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
            { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' }
        ]
    },
    server: {
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    plugins: [vue(), ssr()],
    clearScreen: false
})
