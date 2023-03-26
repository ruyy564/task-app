import {
  Button,
  TextField,
  Typography,
  ButtonGroup,
  Alert,
} from '@mui/material';
import useFormTask from '../hooks/useFormTask';
import Modal from './Modal';
import { STATUS } from '../constants';

const FormTask = ({
  open,
  handleClose,
  initState,
  addTask,
  updateTask,
  status,
  errorMessage,
}) => {
  const { closeForm, name, email, text, saveContact } = useFormTask(
    handleClose,
    initState,
    addTask,
    updateTask
  );

  return (
    <Modal open={open} handleClose={closeForm}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Введите информацию о задаче
      </Typography>
      {status === STATUS.error && (
        <Alert severity="error">{errorMessage}</Alert>
      )}
      {status === STATUS.success && (
        <Alert severity="success">
          {initState?.uuid ? 'Изменения сохранены' : 'Задача добавлена'}
        </Alert>
      )}
      <TextField
        id="name"
        label="Имя"
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
      />
      <TextField
        id="text"
        label="Текст"
        fullWidth
        value={text.value}
        onChange={text.changeHandler}
      />
      <ButtonGroup>
        <Button variant="contained" fullWidth onClick={saveContact}>
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
