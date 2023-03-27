import { connect } from 'react-redux';

import TaskPage from '../pages/TaskPage';
import { fetchTasks, deleteTask, updateTask } from '../services/task';
import { resetStatus } from '../store/features/task/taskSlice';
import { selectTasks, selectTaskCount } from '../store/features/task/selectors';
import { selectUserAuth } from '../store/features/user/selectors';

const mapState = (state) => ({
  tasks: selectTasks(state),
  count: selectTaskCount(state),
  auth: selectUserAuth(state),
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
