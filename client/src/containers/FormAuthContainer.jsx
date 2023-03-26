import { connect } from 'react-redux';

import FormAuth from '../components/FormAuth';
import { signIn, logout } from '../services/user';

const mapState = (state) => ({
  status: state.user.status,
  errorMessage: state.user.errorMessage,
});

const mapDispatch = {
  logout: () => logout(),
  signIn: (login, password) => signIn({ login, password }),
};

const connector = connect(mapState, mapDispatch);

export default connector(FormAuth);
