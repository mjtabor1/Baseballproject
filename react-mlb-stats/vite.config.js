import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  esbuild: {
    loader: "jsx", // Treat .js files as JSX
    include: /src\/.*\.js$/, // Apply only to .js files in the src directory
  },
  build: {
    outDir: 'build'
  }
});