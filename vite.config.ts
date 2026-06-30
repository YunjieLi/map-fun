import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'src/kings', dest: 'src' },
        { src: 'src/swordsmen', dest: 'src' },
        { src: 'src/spanish-missions', dest: 'src' },
        { src: 'src/deck-tests', dest: 'src' },
        { src: 'src/liancheng', dest: 'src' },
        { src: 'src/mapbox', dest: 'src' },
        { src: 'favicon.ico', dest: '.' },
      ],
    }),
  ],
  base: '/',
  server: {
    host: true,
    port: 5180,
    strictPort: true,
  },
})
