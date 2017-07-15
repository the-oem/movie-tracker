import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { makeFetchCall } from '../../actions/items';
import { addToFavorites } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    favorites: state.favorites,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(makeFetchCall()),
    addFavorite: () => dispatch(addToFavorites()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
