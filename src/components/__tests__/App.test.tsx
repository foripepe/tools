import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../App';

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByText('count is 0');
    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });

  it('renders Vite logo with correct link', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    expect(viteLogo).toBeInTheDocument();
    expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vite.dev');
  });

  it('renders React logo with correct link', () => {
    render(<App />);
    const reactLogo = screen.getByAltText('React logo');
    expect(reactLogo).toBeInTheDocument();
    expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
  });

  it('renders edit instruction text', () => {
    render(<App />);
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/App\.tsx/i)).toBeInTheDocument();
  });

  it('renders documentation link text', () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});
