import { connect } from 'react-redux';

import FormTask from '../components/FormTask';
import { addTask, updateTask } from '../services/task';

const mapState = (state) => ({
  status: state.task.status,
  errorMessage: state.task.errorMessage,
});

const mapDispatch = {
  addTask: (email, name, text) => addTask({ email, name, text }),
  updateTask: (uuid, email, name, text, isComplited) =>
    updateTask({ uuid, email, name, text, isComplited }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormTask);
