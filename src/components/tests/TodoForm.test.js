import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoForm from '../TodoForm';

let asFragment;

describe('TodoForm', () => {
  beforeEach(() => {
    ({ asFragment } = render(<TodoForm addTodo={() => {}} />));
  });

  test('renders key elements', () => {
    expect(screen.getByLabelText('New Todo *')).toBeInTheDocument();
    expect(screen.getByTestId('todo')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add New Todo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Delete All Todos/i })
    ).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test('has the correct styles for the form', () => {
    expect(
      screen.getByRole('textbox', { 'margin-top': '1px' })
    ).toBeInTheDocument();
  });
});
