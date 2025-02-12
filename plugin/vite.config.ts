import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: './src/main.ts',
      name: 'DataScrapperPlugin',
      fileName: (format) => `data_scrapper_plugin.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
})