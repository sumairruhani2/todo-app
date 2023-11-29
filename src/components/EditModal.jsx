// React
import React, { useState, useEffect } from 'react';

// Styles
import {
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  IconButton,
} from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// CSS
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ isOpen, onClose, title, onEdit, addTodo }) {
  const [editedTitle, setEditedTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setEditedTitle(title);
  }, [isOpen, title]);

  const handleTextFieldChange = (event) => {
    setEditedTitle(event.target.value);
    setError('');
  };

  const handleEdit = () => {
    if (editedTitle.trim() === '') {
      setError('Todo item name cannot be empty');
      return;
    }

    if (editedTitle === title) {
      setError('Todo item name must be different');
      return;
    }

    onEdit(editedTitle);
    onClose();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ position: 'absolute', top: 10, right: 20 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Todo Item
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="edit"
            label="Edit Todo"
            autoFocus
            value={editedTitle}
            onChange={handleTextFieldChange}
            error={Boolean(error)}
            helperText={error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleEdit}
          >
            Edit Todo
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
