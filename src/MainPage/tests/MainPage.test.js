import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../MainPage';

beforeEach(() => {
  render(<MainPage />);
});

describe('MainPage', () => {
  test('renders Add Todo button', () => {
    const addButton = screen.getByRole('button', { name: /Add New Todo/i });
    expect(addButton).toBeInTheDocument();
  });

  test('renders Delete Todo button', () => {
    const deleteButton = screen.getByRole('button', {
      name: /Delete All Todos/i,
    });
    expect(deleteButton).toBeInTheDocument();
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
  // test('calls onEdit with the edited title and closes the modal when the Edit Todo button is clicked', async () => {
  //   const editButton = screen.getByRole('button', { name: /edit todo/i });

  //   // Change the value in the TextField
  //   fireEvent.change(screen.getByTestId('edit-todo'), {
  //     target: { value: 'Edited Todo' },
  //   });

  //   // Click the Edit Todo button
  //   fireEvent.click(editButton);

  //   expect(await screen.findByText(/Edited Todo/i)).toBeInTheDocument();

  //   // Assert that onEdit is called with the edited title
  //   // Mock the onEdit function and use expect().toHaveBeenCalledWith()
  //   const onEditMock = jest.fn();
  //   const { rerender } = render(
  //     <EditModal
  //       isOpen={true}
  //       onClose={() => {}}
  //       title="Test Todo"
  //       onEdit={onEditMock}
  //     />
  //   );

  //   fireEvent.change(screen.getByTestId('edit-todo'), {
  //     target: { value: 'Edited Todo' },
  //   });

  //   fireEvent.click(screen.getByRole('button', { name: /edit todo/i }));

  //   expect(onEditMock).toHaveBeenCalledWith('Edited Todo');

  //   // Assert that the modal is closed
  //   rerender(
  //     <EditModal
  //       isOpen={false}
  //       onClose={() => {}}
  //       title="Test Todo"
  //       onEdit={() => {}}
  //     />
  //   );
  //   expect(asFragment().container.firstChild).toBeNull();
  // });
});
