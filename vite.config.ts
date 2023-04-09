import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets/')
    }
  },
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
