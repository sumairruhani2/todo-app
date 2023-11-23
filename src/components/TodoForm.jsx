// React
import React from "react";

// Styles
import {Button, Box, TextField} from '@mui/material';


// hooks
import { useState } from 'react';

export default function TodoForm({addTodo}) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="todo"
              label="New Todo"
              name="todo"
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Todo
            </Button>
          </Box>
  )
}