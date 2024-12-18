import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [React],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  esbuild: {
    loader: 'jsx', // This is the correct way to specify the loader
  },
});
