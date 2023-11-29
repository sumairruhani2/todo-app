// React
import React from 'react';

// Styles
import { Box, Container } from '@mui/material';

// Components
import Copyright from '../components/Copyright';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Title from '../components/Title';

// Custom Hooks
import useMainPage from './hooks/useMainPage';

const MainPage = () => {
  const { todos, checkTodo, deleteTodo, addTodo, editTodo, deleteAllTodos } =
    useMainPage();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f5f6fa',
      }}
    >
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Title />
        </Box>
        <TodoForm addTodo={addTodo} deleteAllTodos={deleteAllTodos} />
        <TodoList
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          addTodo={addTodo}
          editTodo={editTodo}
        />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Box>
  );
};

export default MainPage;
