import { Button, TextField, Typography, ButtonGroup } from '@mui/material';

import useFormTask from '../hooks/useFormTask';
import Modal from './Modal';
import { STATUS } from '../constants';
import Alert from '../containers/AlertContainer';

const FormTask = ({
  open,
  handleClose,
  initState,
  addTask,
  updateTask,
  status,
  errorMessage,
}) => {
  const { closeForm, name, email, text, saveTask } = useFormTask(
    handleClose,
    initState,
    addTask,
    updateTask
  );
  const textAlert =
    status === STATUS.error
      ? errorMessage
      : initState?.uuid
      ? 'Изменения сохранены'
      : 'Задача добавлена';

  return (
    <Modal open={open} handleClose={closeForm}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Данные о задаче
      </Typography>
      <Alert text={textAlert} status={status} />
      <TextField
        id="name"
        label="Имя пользователя"
        fullWidth
        value={name.value}
        onChange={name.changeHandler}
        required
      />
      <TextField
        id="email"
        label="Email"
        fullWidth
        value={email.value}
        onChange={email.changeHandler}
        required
      />
      <TextField
        id="text"
        label="Текст"
        fullWidth
        value={text.value}
        onChange={text.changeHandler}
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
