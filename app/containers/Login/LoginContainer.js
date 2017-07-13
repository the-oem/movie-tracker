import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { makeUserCall } from '../../actions/users';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: (email, password) => {
      dispatch(makeUserCall(email, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
