import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

let asFragment;

describe('TodoList', () => {
  beforeEach(() => {
    ({ asFragment } = render(
      <TodoList
        todos={[
          { id: 1, title: 'Test Todo 1', isCompleted: false },
          { id: 2, title: 'Test Todo 2', isCompleted: true },
        ]}
        checkTodo={() => {}}
        deleteTodo={() => {}}
        addTodo={() => {}}
        editTodo={() => {}}
      />
    ));
  });

  // Rendering Test
  test('key elements', () => {
    expect(
      screen.getByRole('heading', { name: /Test Todo 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Test Todo 2/i })
    ).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('has the correct styles for the list', () => {
    const list = screen.getAllByRole('heading');
    list.forEach((item) => {
      expect(item).toHaveStyle('margin-top: 0px');
    });
  });
});
