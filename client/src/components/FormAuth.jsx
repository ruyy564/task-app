import { NavLink } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

import useInput from '../hooks/useInput';
import Alert from '../containers/AlertContainer';

const FormAuth = ({ signIn, status, errorMessage }) => {
  const login = useInput();
  const password = useInput();
  const clickHandler = () => {
    signIn(login.value, password.value);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        Авторизация
      </Typography>
      <Alert text={errorMessage} status={status} />
      <TextField
        margin="normal"
        required
        fullWidth
        id="login"
        label="login"
        name="login"
        autoComplete="login"
        autoFocus
        value={login.value}
        onChange={login.changeHandler}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password.value}
        onChange={password.changeHandler}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={clickHandler}
      >
        <NavLink to="/">Войти</NavLink>
      </Button>
    </Box>
  );
};

export default FormAuth;
