import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Copyright from './components/Copyright';

export default function MainPage() {

  return (
    <Box sx={{  minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px'
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" divider={<Divider orientation="vertical" />}
>
            <ChecklistIcon style={{ fontSize: 100 }} />
            <Typography style={{ fontSize: 50 }}>
            Todo List
          </Typography>
          </Stack>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="todo"
              label="New Todo"
              name="todo"
              autoFocus
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
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Box>
  );
}