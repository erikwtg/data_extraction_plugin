import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/plugin': 'http://plugin:4000'
    }
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    lib: {
      entry: './src/main.ts',
      name: 'DataScrapperPlugin',
      fileName: (format) => `data_scrapper_plugin.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
    minify: 'esbuild'
  },
})