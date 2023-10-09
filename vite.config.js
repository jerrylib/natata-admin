import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const path = process.env.NODE_ENV === 'production' ? '/natata-admin/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  // base: path,
  plugins: [react()],
})
