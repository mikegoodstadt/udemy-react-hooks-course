import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button correctly', () => {
  render(<App />);
  const linkElement = screen.getByText('click me please');
  expect(linkElement).toBeInTheDocument();
});
