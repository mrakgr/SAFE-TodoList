import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:' + (process.env.SERVER_PROXY_PORT || '5000'),
                changeOrigin: true,
            },
            '/socket': {
                target: 'http://localhost:' + (process.env.SERVER_PROXY_PORT || '5000'),
                ws: true,
            },
        }
    },
    plugins: [react()],
    define: {
        // remotedev will thrown an exception without this.
        global: {},
    },
})