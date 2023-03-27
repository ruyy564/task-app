import { connect } from 'react-redux';

import FormTask from '../components/FormTask';
import { addTask, updateTask } from '../services/task';
import {
  selectTaskErrorMessage,
  selectTaskErrors,
  selectTaskStatus,
} from '../store/features/task/selectors';

const mapState = (state) => ({
  status: selectTaskStatus(state),
  errorMessage: selectTaskErrorMessage(state),
  errors: selectTaskErrors(state),
});

const mapDispatch = {
  addTask: (email, name, text) => addTask({ email, name, text }),
  updateTask: (uuid, email, name, text, isComplited) =>
    updateTask({ uuid, email, name, text, isComplited }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormTask);
