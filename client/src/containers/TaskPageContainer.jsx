import { connect } from 'react-redux';

import TaskPage from '../pages/TaskPage';
import { fetchTasks, deleteTask, updateTask } from '../services/task';
import { resetStatus } from '../store/features/task/taskSlice';

const mapState = (state) => ({
  tasks: state.task.tasks,
  count: state.task.count,
  auth: state.user.auth,
});

const mapDispatch = {
  fetchTasks: (page, limit, sortedBy, direction) =>
    fetchTasks({ page, limit, sortedBy, direction }),
  deleteTask: (uuid) => deleteTask({ uuid }),
  updateTask: (uuid, email, name, text, isComplited) =>
    updateTask({ uuid, email, name, text, isComplited }),
  resetStatus: () => resetStatus(),
};

const connector = connect(mapState, mapDispatch);

export default connector(TaskPage);
