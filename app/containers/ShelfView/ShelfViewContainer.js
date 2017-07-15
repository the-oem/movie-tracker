import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { makeFetchCall } from '../../actions/items';
import { userIsAuthenticated, userAuthenticationSuccess } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    fetchData: state.fetchData,
    logUserIn: state.logUserIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(makeFetchCall()),
    logUserIn: (user) => {
      dispatch(userIsAuthenticated(true));
      dispatch(userAuthenticationSuccess({ data: { name: user.name, id: user.id } }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
