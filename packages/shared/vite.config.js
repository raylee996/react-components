import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
      name: 'Utils'
    }
  },
  plugins: [
    dts({
      outputDir: ['dist', 'types'],
    })
  ]
});