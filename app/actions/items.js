import ApiUtils from '../helpers/apiUtils';

export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
};

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
};

export const itemsFetchDataSuccess = (items) => {
  console.log(items, 'itams');
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
};

export const makeFetchCall = () => {
  return (dispatch) => {
    return new ApiUtils().fetchMovies()
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};
