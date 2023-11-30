import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Todo from '../Todo';

let asFragment, getByText;

describe('Todo', () => {
  beforeEach(() => {
    ({ asFragment, getByText } = render(<Todo title="Test Todo" />));
  });
  // Rendering Test
  test('renders Todo component without errors', () => {
    expect(getByText('Test Todo')).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('has the correct styles for completed todo', () => {
    cleanup(); // clear render from beforeEach
    const { getByText } = render(<Todo title="Test Todo" isCompleted={true} />);
    const todoTitle = getByText('Test Todo');
    expect(todoTitle).toHaveStyle('text-decoration: line-through');
  });

  test('has the correct styles for not completed todo', () => {
    cleanup(); // clear render from beforeEach
    const { getByText } = render(
      <Todo title="Test Todo" isCompleted={false} />
    );
    const todoTitle = getByText('Test Todo');
    expect(todoTitle).toHaveStyle('text-decoration: none');
  });
});
