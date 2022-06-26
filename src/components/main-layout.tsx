import { Outlet } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Sidebar } from './sidebar'

export function MainLayout() {
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
          <Container maxWidth="xl">
            <Stack direction="row">
                <Sidebar />
                <Box component="main" py={1} px={5}>
                    <Outlet />
                </Box>
            </Stack>
          </Container>
        </>
      );
}
