import { Typography, ButtonGroup, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';

const Task = ({ task, handleOpen, deleteContact, updateTask, auth }) => {
  const [isComplited, setComplited] = useState(task.isComplited);
  const changeHandler = () => {
    setComplited((prev) => !prev);
    updateTask(task.uuid, task.email, task.name, task.text, !task.isComplited);
  };

  return (
    <Card sx={{ width: '50%' }} gap={5}>
      <CardContent>
        <Checkbox
          edge="start"
          checked={isComplited}
          onChange={changeHandler}
          disabled={!auth}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task.name} - email:{task.email}
        </Typography>
        <Typography
          variant="body2"
          sx={{ width: '100%', wordWrap: 'break-word' }}
        >
          Text:{task.text}
        </Typography>
        {auth && (
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ButtonGroup>
              <Button
                title={'Edit'}
                onClick={() => handleOpen(task)}
                size="small"
              >
                <EditIcon />
              </Button>
              <Button
                title={'Delete'}
                color="error"
                size="small"
                onClick={deleteContact}
              >
                <DeleteIcon />
              </Button>
            </ButtonGroup>
          </CardActions>
        )}
        {task.isUpdated && (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Задача отредактирована
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Task;
