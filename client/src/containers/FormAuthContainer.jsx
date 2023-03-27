import { connect } from 'react-redux';

import FormAuth from '../components/FormAuth';
import { signIn, logout } from '../services/user';
import {
  selectUserStatus,
  selectUserErrorMessage,
  selectUserErrors,
} from '../store/features/user/selectors';

const mapState = (state) => ({
  status: selectUserStatus(state),
  errorMessage: selectUserErrorMessage(state),
  errors: selectUserErrors(state),
});

const mapDispatch = {
  logout: () => logout(),
  signIn: (login, password) => signIn({ login, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormAuth);
