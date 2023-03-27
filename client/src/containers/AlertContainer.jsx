import { connect } from 'react-redux';

import Alert from '../components/Alert';
import { resetStatus as resetStatusTask } from '../store/features/task/taskSlice';
import { resetStatus as resetStatusUser } from '../store/features/user/userSlice';

const mapDispatch = {
  resetStatusTask: () => resetStatusTask(),
  resetStatusUser: () => resetStatusUser(),
};

const connector = connect(null, mapDispatch);

export default connector(Alert);
