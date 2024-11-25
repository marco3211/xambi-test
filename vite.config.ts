import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 3000, 
    watch: {
      usePolling: true,
      interval: 100,
      ignored: [
        '**',
        '!/home/ec2-user/project/**'
      ],
    },
    hmr: {
      port: 3001, 
    },
  },
})