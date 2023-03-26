import { connect } from 'react-redux';

import Header from '../components/Header';
import { logout } from '../services/user';

const mapState = (state) => ({
  auth: state.user.auth,
});

const mapDispatch = {
  logout: () => logout(),
};

const connector = connect(mapState, mapDispatch);

export default connector(Header);
