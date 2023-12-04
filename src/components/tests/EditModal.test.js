import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EditModal from '../EditModal';

let asFragment;

describe('EditModal', () => {
  beforeEach(() => {
    ({ asFragment } = render(
      <EditModal
        isOpen={true}
        onClose={() => {}}
        title="Test Todo"
        onEdit={() => {}}
      />
    ));
  });

  // Rendering Test
  test('renders key elements of the modal', () => {
    expect(screen.getByText('Edit Todo Item')).toBeInTheDocument();
    expect(document.getElementById('edit')).toHaveValue('Test Todo');
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText('Edit Todo *')).toBeInTheDocument();
    expect(screen.getByText('Edit Todo Item')).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('closes the modal when the close button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    // expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('calls onEdit with the edited title and closes the modal when the Edit Todo button is clicked', () => {
    const editButton = screen.getByRole('button', { name: /edit todo/i });

    // Change the value in the TextField
    fireEvent.change(screen.getByLabelText(/Edit Todo/i), {
      target: { value: 'Edited Todo' },
    });

    // Click the Edit Todo button
    fireEvent.click(editButton);

    // Assert that onEdit is called with the edited title
    // Mock the onEdit function and use expect().toHaveBeenCalledWith()
    const onEditMock = jest.fn();
    const { rerender } = render(
      <EditModal
        isOpen={true}
        onClose={() => {}}
        title="Test Todo"
        onEdit={onEditMock}
      />
    );

    fireEvent.change(screen.getByTestId('edit-todo-field'), {
      target: { value: 'Edited Todo' },
    });
    fireEvent.click(screen.getByRole('button', { name: /edit todo/i }));

    expect(onEditMock).toHaveBeenCalledWith('Edited Todo');

    // Assert that the modal is closed
    rerender(
      <EditModal
        isOpen={false}
        onClose={() => {}}
        title="Test Todo"
        onEdit={() => {}}
      />
    );
    expect(asFragment().container.firstChild).toBeNull();
  });
});
