# React TypeScript Application

A modern React application built with TypeScript, Vite, ESLint, Prettier, and comprehensive testing setup.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🧹 [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- 💅 [Prettier](https://prettier.io/) - Opinionated code formatter
- 🧪 [Vitest](https://vitest.dev/) - Fast unit testing framework
- 🎭 [Playwright](https://playwright.dev/) - Reliable E2E testing
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) (v7 or later)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run unit tests
- `pnpm test:ui` - Run unit tests with UI
- `pnpm test:coverage` - Generate test coverage report
- `pnpm test:e2e` - Run E2E tests
- `pnpm test:e2e:ui` - Run E2E tests with UI

## Testing Setup

### Unit Testing (Vitest + React Testing Library)

The project uses Vitest for fast unit testing and React Testing Library for component testing.

Example test:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders heading', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
```

### E2E Testing (Playwright)

Playwright is configured for cross-browser E2E testing with:
- Chromium
- Firefox
- WebKit

Example E2E test:
```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Vite \+ React/);
});
```

## Project Structure

```
├── src/                    # Source files
│   ├── components/         # React components
│   │   └── __tests__/     # Component tests
│   └── test/              # Test setup
├── e2e/                    # E2E tests
├── public/                 # Static assets
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── index.html             # Entry HTML file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── playwright.config.ts   # Playwright configuration
```

## Development Tools

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Testing
- Vitest for fast unit testing
- React Testing Library for component testing
- Playwright for E2E testing
- Coverage reporting with v8

### Build Tools
- Vite for fast development and building
- pnpm for efficient package management

## License

MIT
