import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { userIsAuthenticated, userAuthenticationSuccess } from '../../actions/users';
import { userGetFavorites } from '../../actions/favorites';

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => {
      dispatch(userIsAuthenticated(false));
      dispatch(userAuthenticationSuccess({ data: { name: undefined, id: undefined } }));
      dispatch(userGetFavorites({ data: [] }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
