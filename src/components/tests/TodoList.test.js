// todoList.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../TodoList';

let asFragment, getByRole;

describe('TodoList', () => {
  beforeEach(() => {
    ({ asFragment, getByRole } = render(
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
  test('renders TodoList component without errors', () => {
    expect(getByRole('list')).toBeInTheDocument();
    expect(getByRole('listitem', { name: /Test Todo 1/i })).toBeInTheDocument();
    expect(getByRole('listitem', { name: /Test Todo 2/i })).toBeInTheDocument();
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Style Test
  test('has the correct styles for the list', () => {
    const list = getByRole('list');
    expect(list).toHaveStyle('margin-top: 0px');
  });
});
