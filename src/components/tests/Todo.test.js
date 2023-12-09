import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Todo from '../Todo';

let asFragment;

describe('Todo', () => {
  beforeEach(() => {
    ({ asFragment } = render(<Todo title="Test Todo" />));
  });
  // Rendering Test
  test('renders Todo component without errors', () => {
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('renders Done icon button', () => {
    const doneIconButton = screen.getByTestId('done-icon-button');
    expect(doneIconButton).toBeInTheDocument();
  });

  test('renders Edit icon button', () => {
    const editIconButton = screen.getByTestId('edit-icon-button');
    expect(editIconButton).toBeInTheDocument();
  });

  test('renders Delete icon button', () => {
    const deleteIconButton = screen.getByTestId('delete-icon-button');
    expect(deleteIconButton).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('has the correct styles for completed todo', () => {
    cleanup(); // clear render from beforeEach
    render(<Todo title="Test Todo" isCompleted={true} />);
    const todoTitle = screen.getByText('Test Todo');
    expect(todoTitle).toHaveStyle('text-decoration: line-through');
  });

  test('has the correct styles for not completed todo', () => {
    cleanup(); // clear render from beforeEach
    render(<Todo title="Test Todo" isCompleted={false} />);
    const todoTitle = screen.getByText('Test Todo');
    expect(todoTitle).toHaveStyle('text-decoration: none');
  });
});
