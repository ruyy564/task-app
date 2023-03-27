import { connect } from 'react-redux';

import Header from '../components/Header';
import { logout } from '../services/user';
import { selectUserAuth } from '../store/features/user/selectors';

const mapState = (state) => ({
  auth: selectUserAuth(state),
});

const mapDispatch = {
  logout: () => logout(),
};

const connector = connect(mapState, mapDispatch);

export default connector(Header);
