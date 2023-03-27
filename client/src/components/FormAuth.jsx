import { Button, TextField, Box, Typography } from '@mui/material';

import useFormAuth from '../hooks/useFormAuth';
import Alert from '../containers/AlertContainer';

const FormAuth = ({ signIn, status, errorMessage, errors }) => {
  const { login, password, clickHandler } = useFormAuth(signIn);

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
        error={Boolean(errors && errors['login'])}
        helperText={errors && errors['login']}
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
        error={Boolean(errors && errors['password'])}
        helperText={errors && errors['password']}
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
        Войти
      </Button>
    </Box>
  );
};

export default FormAuth;
