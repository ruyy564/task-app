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
        <Checkbox
          edge="start"
          checked={task.isComplited}
          onChange={changeHandler}
          disabled={!auth}
        />
        <Text text={`Имя пользователя:${task.name}`} />
        <Text text={`Email:${task.email}`} />
        <Text text={`Текст:${task.text || 'Отсутствует'}`} />
        {task.isComplited && <Text text={`Задача выполнена`} />}
        {task.isUpdated && <Text text={`Задача отредактирована`} />}
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
