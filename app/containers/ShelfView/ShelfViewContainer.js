import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(fetchNewMovies(url, imagePrefix)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
