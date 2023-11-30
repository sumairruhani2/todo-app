// todoForm.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import TodoForm from '../TodoForm';

let asFragment, getByLabelText, getByText, getByRole;

describe('TodoForm', () => {
  beforeEach(() => {
    ({ asFragment, getByLabelText, getByText, getByRole } = render(
      <TodoForm addTodo={() => {}} />
    ));
  });

  // Rendering Test
  test('renders TodoForm component without errors', () => {
    expect(getByLabelText('New Todo')).toBeInTheDocument();
    expect(document.getElementById('todo')).toHaveValue('');
    expect(getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('has the correct styles for the form', () => {
    expect(getByRole('form')).toHaveStyle('margin-top: 1px');
  });
});
