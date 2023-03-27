import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function Header({ auth, logout }) {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task app
          </Typography>
          {pathname === '/login' && <NavLink to="/e">Назад</NavLink>}
          {pathname === '/' && auth && (
            <NavLink to="/" onClick={logout}>
              Выйти
            </NavLink>
          )}
          {pathname === '/' && !auth && <NavLink to="/login">Войти</NavLink>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
