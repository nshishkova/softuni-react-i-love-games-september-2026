import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  test: {
    globals: false,
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTests.js']
  },
})