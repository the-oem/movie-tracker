import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { fetchMoviesAction } from '../../actions/items';
import { fetchFavoritesAction, addFavoriteAction } from '../../actions/favorites';
import { userIsAuthenticated, userAuthenticationSuccess } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    favorites: state.favorites,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    fetchData: state.fetchData,
    logUserIn: state.logUserIn,
    userId: state.userAuthenticationSuccess.user_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMoviesAction()),
    fetchFavorites: userId => dispatch(fetchFavoritesAction(userId)),
    addFavorite: (userId, movie) => dispatch(addFavoriteAction(userId, movie)),
    logUserIn: (user) => {
      dispatch(userIsAuthenticated(true));
      dispatch(userAuthenticationSuccess({ data: { name: user.name, id: user.id } }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
