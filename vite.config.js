import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'db409c08-c58e-4db2-814e-26ddee47cda0-00-2y7dih8zd590y.janeway.replit.dev',
      // ou para aceitar qualquer host:
      'all'
    ]
  }
})