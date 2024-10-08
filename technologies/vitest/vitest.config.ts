/// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.test.{ts,js}'], 
      exclude: ['node_modules', 'test'], 
    },
    
    },
})
