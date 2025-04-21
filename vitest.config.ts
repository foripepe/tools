/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup.ts',
        'e2e/',
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/types/',
        'src/assets/',
        '**/*.d.ts',
        '**/*.config.ts',
        '**/*.config.js',
        '**/index.ts',
        '**/types.ts',
        '**/constants.ts',
        '**/styles.ts',
        '**/theme.ts',
        'playwright-report/**'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    },
    exclude: ['node_modules/**', 'e2e/**'],
  },
}); 