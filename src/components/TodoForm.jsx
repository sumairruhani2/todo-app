// React
import React, { useState } from 'react';

// Styles
import { Button, Box, TextField } from '@mui/material';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setError('Todo item cannot be empty');
      return;
    }

    addTodo(text);
    setText('');
    setError('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        data-testid="todo"
        margin="normal"
        required
        fullWidth
        id="todo"
        label="New Todo"
        name="todo"
        autoFocus
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setError('');
        }}
        error={Boolean(error)}
        helperText={error}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          bgcolor: '#e84118',
          '&:hover': {
            bgcolor: '#c23616',
          },
          '&:active': {
            bgcolor: '#c23616',
          },
        }}
      >
        Add Todo
      </Button>
    </Box>
  );
}
