// React
import { useState } from 'react';

// Styles
import {Box, Container} from '@mui/material';

// NPM packages
import { v4 as uuidv4 }  from 'uuid'

// Components
import Copyright from '../components/Copyright';
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList';
import Title from '../components/Title';


export default function MainPage() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) =>  {
    setTodos(todos.filter(todo => todo.id != id))
  }
  
  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      title: text,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <Box sx={{  minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="main" maxWidth="xs">
        <Title />
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Box>
  );
}