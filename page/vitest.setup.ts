import { vi } from 'vitest'

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: query === '(prefers-color-scheme: opaque)',
  media: query,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))