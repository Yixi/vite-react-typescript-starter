import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger']
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@root/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  server: {
    port: 8800
  }
})
