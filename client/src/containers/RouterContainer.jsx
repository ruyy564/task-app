import { connect } from 'react-redux';

import Router from '../components/Router';
import { selectUserAuth } from '../store/features/user/selectors';

const mapState = (state) => ({
  auth: selectUserAuth(state),
});

const connector = connect(mapState);

export default connector(Router);
