import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { makeFetchCall } from '../../actions/items';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, imagePrefix) => dispatch(makeFetchCall(url, imagePrefix)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
