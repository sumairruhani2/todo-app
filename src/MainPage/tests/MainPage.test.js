import { render, screen } from '@testing-library/react';
import MainPage from '../MainPage';

beforeEach(() => {
  render(<MainPage />);
})

describe('MainPage', () => {
  test('renders Add Todo button', () => {
    const addButton = screen.getByText(/Add Todo/i);
    expect(addButton).toBeInTheDocument();
  });
  
  test('renders New Todo input field', () => {
    const inputField = screen.getByLabelText(/New Todo/i);
    expect(inputField).toBeInTheDocument();
  });
  
  test('renders correct title', () => {
    const titleElement = screen.queryByTestId('main-page-title'); // Add a data-testid
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle({ fontSize: '50px' }); 
  });
})