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
    const editTodoButton = screen.getByRole('button', {
      name: /Edit Todo/i,
    });

    expect(editTodoButton).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Logic test
  test('Close modal logic run when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <EditModal
        isOpen={true}
        onClose={onCloseMock}
        title="Test Todo"
        onEdit={() => {}}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
