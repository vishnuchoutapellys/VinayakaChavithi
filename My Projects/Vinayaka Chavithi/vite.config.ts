import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base so the site works when deployed to a subpath (GitHub Pages)
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    // Windows can reject native watchers for newly added/locked image files.
    watch: { usePolling: true, interval: 1000 }
  }
})
