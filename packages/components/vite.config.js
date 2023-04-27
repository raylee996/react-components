import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const config = defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'react-components',
      name: 'ReactComponents'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [
    react(),
    dts()
  ]
});

export default config;