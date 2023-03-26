import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useLocation } from 'react-router-dom';

function Header({ auth, logout }) {
  const location = useLocation();
  console.log(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task app
          </Typography>
          <Button color="inherit">
            {location.pathname === '/login' && <NavLink to="/">Назад</NavLink>}
            {location.pathname === '/' && auth && (
              <NavLink to="/" onClick={logout}>
                Выйти
              </NavLink>
            )}
            {location.pathname === '/' && !auth && (
              <NavLink to="/login">Войти</NavLink>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
