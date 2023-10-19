import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const base = process.env.NODE_ENV === 'production' ? '/natata-admin/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  // base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
