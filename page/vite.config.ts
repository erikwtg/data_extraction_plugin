import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineConfigTest } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default mergeConfig(
  defineConfig({
    plugins: [
      react(),
      tailwindcss(),
    ],
  }),
  defineConfigTest({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.ts',
    },
  })
)
