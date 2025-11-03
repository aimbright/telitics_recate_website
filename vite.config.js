import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/telitics_recate_website/' : '/',
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    https: false,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  },
  build: {
    sourcemap: false,
  },
  optimizeDeps: {
    force: true,
    include: ['react', 'react-dom'],
  },
  clearScreen: false,
})

