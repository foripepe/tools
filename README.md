# Tools

A modern React + TypeScript application built with Vite, featuring comprehensive testing setup and GitHub Pages deployment.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://foripepe.github.io/tools/)

## Features

- ⚡️ [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org) - A JavaScript library for building user interfaces
- 📘 [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types
- 🧹 [ESLint](https://eslint.org) - Pluggable JavaScript linter
- 💅 [Prettier](https://prettier.io) - Opinionated code formatter
- 🧪 [Vitest](https://vitest.dev) - Vite-native testing framework
- 🎭 [Playwright](https://playwright.dev) - E2E testing framework
- 📦 [pnpm](https://pnpm.io) - Fast, disk space efficient package manager
- 🌐 [GitHub Pages](https://pages.github.com) - Static site hosting

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:foripepe/tools.git
   cd tools
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Testing
- `pnpm test` - Run unit tests in watch mode
- `pnpm test:ui` - Run unit tests in UI mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm test:e2e` - Run E2E tests
- `pnpm test:e2e:ui` - Run E2E tests in UI mode

### Deployment
- `pnpm predeploy` - Build the project
- `pnpm deploy` - Deploy to GitHub Pages

## Testing Setup

### Unit Testing with Vitest
- Configuration: `vitest.config.ts`
- Test setup: `src/test/setup.ts`
- Coverage thresholds: 80% for statements, branches, functions, and lines

Example unit test:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../App';

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByText('count is 0');
    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});
```

### E2E Testing with Playwright
- Configuration: `playwright.config.ts`
- Supported browsers: Chromium, Firefox, WebKit

Example E2E test:
```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Vite \+ React/);
  
  // Check for Vite logo
  const viteLogo = page.getByAltText('Vite logo');
  await expect(viteLogo).toBeVisible();
  await expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vite.dev');
});
```

## Project Structure

```
tools/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── src/
│   ├── components/          # React components
│   ├── test/               # Test setup files
│   ├── assets/             # Static assets
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── e2e/                    # E2E tests
├── public/                 # Public assets
├── index.html              # HTML entry point
├── package.json            # Project configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── vitest.config.ts        # Vitest configuration
```

## Development Tools

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Testing
- Vitest for unit testing
- Playwright for E2E testing
- Testing Library for component testing

### Build & Deployment
- Vite for fast development and optimized builds
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## License

MIT
