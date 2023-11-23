import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from '../Copyright';

beforeEach(() => {
  render(<Copyright />);
});

describe('CopyRight', () => {
  test('renders Copyright text in the component', () => {
    const copyrightElement = screen.getByText(/Copyright/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  test('renders a Link with correct href link', () => {
    const linkElement = screen.getByRole('link', { name: /Todo List/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://mui.com/');
  });

  test('renders current year dynamically', () => {
    const currentYear = new Date().getFullYear().toString();
    const yearElement = screen.getByText(new RegExp(currentYear));
    expect(yearElement).toBeInTheDocument();
  });
});
