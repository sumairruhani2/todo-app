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
  const { todos, checkTodo, deleteTodo, addTodo, editTodo } = useMainPage();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="main" maxWidth="xs">
        <Title />
        <TodoForm addTodo={addTodo} />
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
