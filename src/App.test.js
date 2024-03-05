import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('mainSection there', () => {
  render(<App />);
  const mainSection = screen.getByTestId('mainSection');
  expect(mainSection).toBeInTheDocument();
});

test('Sign In Button', () => {
  const { getByRole } = render(<App />);
  const buttonByRole = getByRole('button', { name: 'Sign In' });
  expect(buttonByRole).toBeInTheDocument();
});


