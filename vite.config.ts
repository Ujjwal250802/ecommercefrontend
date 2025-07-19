import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ecommercebackend-2-f367.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
