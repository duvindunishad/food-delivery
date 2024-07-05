import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/food-delivery/',
  plugins: [react()],
  build: {
    outDir: 'build',  // Ensures the output directory is 'build'
  },
});
