import { Button, TextField, Typography, ButtonGroup } from '@mui/material';

import useFormTask from '../hooks/useFormTask';
import Modal from './Modal';
import Alert from '../containers/AlertContainer';

const FormTask = ({
  open,
  handleClose,
  initState,
  addTask,
  updateTask,
  status,
  errorMessage,
  errors,
}) => {
  const { closeForm, name, email, text, textAlert, saveTask } = useFormTask(
    handleClose,
    initState,
    addTask,
    updateTask,
    status,
    errorMessage
  );

  return (
    <Modal open={open} handleClose={closeForm}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Введите информацию о задаче
      </Typography>
      <Alert text={textAlert} status={status} />
      <TextField
        id="name"
        label="Имя пользователя"
        fullWidth
        value={name.value}
        onChange={name.changeHandler}
        error={Boolean(errors && errors['name'])}
        helperText={errors && errors['name']}
        required
      />
      <TextField
        id="email"
        label="Email"
        fullWidth
        value={email.value}
        onChange={email.changeHandler}
        error={Boolean(errors && errors['email'])}
        helperText={errors && errors['email']}
        required
      />
      <TextField
        id="text"
        label="Текст"
        fullWidth
        value={text.value}
        onChange={text.changeHandler}
        error={Boolean(errors && errors['text'])}
        helperText={errors && errors['text']}
      />
      <ButtonGroup>
        <Button variant="contained" fullWidth onClick={saveTask}>
          Сохранить
        </Button>
        <Button variant="contained" fullWidth onClick={closeForm} color="error">
          Отменить
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default FormTask;
