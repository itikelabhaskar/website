import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react],
  // For local development, use '/'
  // For GitHub Pages, change this to '/your-repo-name/' before deploying
  base: '/',
})

