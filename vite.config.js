import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    port: 4000
  },
  plugins: [react()],
})
