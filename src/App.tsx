import React from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LunchDiningIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FOOD
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl"></Container>
    </>
  );
}

export default App;
