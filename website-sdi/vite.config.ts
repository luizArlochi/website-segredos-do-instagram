import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "/website-segredos-do-instagram",
  build: {
    chunkSizeWarningLimit: 3000,
    assetsDir: 'assets',
  }
});