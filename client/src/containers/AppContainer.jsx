import { connect } from 'react-redux';

import App from '../App';

const mapState = (state) => ({
  auth: state.user.auth,
});

const connector = connect(mapState);

export default connector(App);
