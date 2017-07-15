import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { makeFetchCall } from '../../actions/items';
import { addToFavorites } from '../../actions/users';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items,
    favorites: state.favorites,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    userId: state.userAuthenticationSuccess.user_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(makeFetchCall()),
    addFavorite: (userId, movie) => dispatch(addToFavorites(userId, movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
