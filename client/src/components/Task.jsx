import {
  ButtonGroup,
  Checkbox,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';

import Text from './Text';
import { ButtonEdit, ButtonDelete } from './Button';

const Task = ({ task, handleOpen, deleteTask, updateTask, auth }) => {
  const changeHandler = () => {
    updateTask(task.uuid, task.email, task.name, task.text, !task.isComplited);
  };

  const deleteHandler = () => {
    deleteTask(task.uuid);
  };

  const openModal = () => {
    handleOpen(task);
  };

  return (
    <Card sx={{ width: '50%' }} gap={5}>
      <CardContent>
        {auth && (
          <Checkbox
            edge="start"
            checked={task.isComplited}
            onChange={changeHandler}
          />
        )}
        <Text text={`Имя пользователя:${task.name}`} />
        <Text text={`Email:${task.email}`} />
        <Text text={`Текст: ${task.text || 'Отсутствует'}`} />
        <Text text={`Cтатус:`} />
        {!task.isComplited && !task.isUpdated && <Text text={' В работе'} />}
        {task.isComplited && <Text text={`Выполнена`} />}
        {task.isUpdated && <Text text={`Отредактирована`} />}
        {auth && (
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ButtonGroup>
              <ButtonEdit onClick={openModal} />
              <ButtonDelete onClick={deleteHandler} />
            </ButtonGroup>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default Task;
