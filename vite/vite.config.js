import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // vite/ is already root
  base: '/assets/', // for CI3 to find assets in public/assets
  build: {
    outDir: '../public/',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.js',
    }
  },
  resolve: {
    alias: {
      bootstrap: path.resolve(__dirname, './node_modules/bootstrap'),
    },
  },
});
