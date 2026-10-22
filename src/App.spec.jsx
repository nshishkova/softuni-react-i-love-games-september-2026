import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';
import { it, expect, describe } from 'vitest';

it('should render the App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText('ALL new games are')).toBeInTheDocument();
});

describe('Navigation tests', () => {
  it('should render the App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Login'));

    expect(screen.getByRole('heading', { name: 'Login', level: 1 })).toBeInTheDocument();
  });
});