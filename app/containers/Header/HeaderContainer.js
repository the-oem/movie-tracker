import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { userIsAuthenticated, userAuthenticationSuccess } from '../../actions/users';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => {
      dispatch(userIsAuthenticated(false));
      dispatch(userAuthenticationSuccess({ data: { name: '', id: '' } }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
