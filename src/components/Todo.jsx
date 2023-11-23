// React
import React from "react";

// Styles
import { Card, CardContent, Typography, Container, IconButton, Stack } from "@mui/material";

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const Todo = ({ title, isCompleted, checkTodo, id, deleteTodo}) => {
  const completeCheck = () => {
    checkTodo(id)
  }

  const removeTodo = () => deleteTodo(id);

  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightgray" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" style={{ textDecoration: isCompleted ? "line-through" : "none" }}
>
            {title}
          </Typography>
        <Stack direction="row" style={{float: 'right'}}>
        <IconButton onClick={completeCheck}>
            <DoneIcon/>
          </IconButton>
          <IconButton onClick={removeTodo}>
            < DeleteIcon />
          </IconButton>
        </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;