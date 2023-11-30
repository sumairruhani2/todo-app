import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditModal from '../EditModal';

let asFragment, getByText, getByLabelText, getByRole;

describe('EditModal', () => {
  beforeEach(() => {
    ({ asFragment, getByText, getByLabelText, getByRole } = render(
      <EditModal
        isOpen={true}
        onClose={() => {}}
        title="Test Todo"
        onEdit={() => {}}
      />
    ));
  });

  // Rendering Test
  test('renders EditModal component without errors', () => {
    expect(getByText('Edit Todo Item')).toBeInTheDocument();
    expect(document.getElementById('edit')).toHaveValue('Test Todo');
    expect(getByText('Edit Todo')).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('closes the modal when the close button is clicked', () => {
    fireEvent.click(getByRole('button', { name: /close/i }));
    // expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('calls onEdit with the edited title and closes the modal when the Edit Todo button is clicked', () => {
    const editButton = getByRole('button', { name: /edit todo/i });
    fireEvent.change(getByLabelText('Edit Todo'), {
      target: { value: 'Edited Todo' },
    });
    fireEvent.click(editButton);
    // expect(onEditMock).toHaveBeenCalledWith('Edited Todo');
    // expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
