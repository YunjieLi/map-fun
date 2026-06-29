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
        { src: 'src/maps/kings',      dest: 'src/maps' },
        { src: 'src/maps/swordsmen',  dest: 'src/maps' },
        { src: 'src/maps/spanish-missions', dest: 'src/maps' },
        { src: 'src/maps/deck-tests', dest: 'src/maps' },
        { src: 'src/maps/liancheng',  dest: 'src/maps' },
        { src: 'src/maps/mapbox',     dest: 'src/maps' },
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
