import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { fetchMoviesAction } from '../../actions/items';
import { fetchFavoritesAction, addFavoriteAction } from '../../actions/favorites';

const mapStateToProps = (state) => {
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
    fetchMovies: () => dispatch(fetchMoviesAction()),
    fetchFavorites: userId => dispatch(fetchFavoritesAction(userId)),
    addFavorite: (userId, movie) => dispatch(addFavoriteAction(userId, movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
