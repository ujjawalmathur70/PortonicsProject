import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the storefront headings', () => {
  render(<App />);
  expect(screen.getByText(/popular catagories/i)).toBeInTheDocument();
  expect(screen.getByText(/new launches/i)).toBeInTheDocument();
});
