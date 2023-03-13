import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger']
  },
  plugins: [
    reactRefresh()
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
