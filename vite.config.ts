import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
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
