// React
import React from 'react';

// Styles
import { Box } from '@mui/material';

// Components
import Todo from './Todo';

const TodoList = ({ todos, checkTodo, deleteTodo, addTodo, editTodo }) => {
  return (
    <Box background="#dcdde1">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          checkTodo={checkTodo}
          id={todo.id}
          deleteTodo={deleteTodo}
          addTodo={addTodo}
          editTodo={editTodo}
        />
      ))}
    </Box>
  );
};

export default TodoList;
