import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  server: { https: true }, // Not needed for Vite 5+
  plugins: [ mkcert() ],
  build: {
    minify: true,
    lib: {
      name: 'SlComponents',
      entry: resolve(__dirname, 'main.js'),
      fileName: 'sl-components',
      formats: ['es','iife'],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'example.html'),
      }
    }
  }
})