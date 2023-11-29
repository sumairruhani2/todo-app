// React
import React, { useState } from 'react';

// Styles
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  Stack,
} from '@mui/material';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

// Components
import EditModal from './EditModal';

const Todo = ({
  title,
  isCompleted,
  checkTodo,
  id,
  deleteTodo,
  addTodo,
  editTodo,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const completeCheck = () => {
    checkTodo(id);
  };

  const removeTodo = () => deleteTodo(id);

  const handleEdit = (editedTitle) => {
    editTodo(id, editedTitle);
    closeModal();
  };

  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{
          marginTop: 35,
          background: '#dcdde1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CardContent style={{ flex: '1' }}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: '#353b48',
              fontWeight: 'bold',
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <Stack direction="row" style={{ marginRight: '8px' }}>
          <IconButton
            onClick={completeCheck}
            style={{
              color: '#353b48',
            }}
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            onClick={openModal}
            style={{
              color: '#353b48',
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={removeTodo}
            style={{
              color: '#353b48',
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Card>
      <EditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        addTodo={addTodo}
        onEdit={handleEdit}
      />
    </Container>
  );
};

export default Todo;
