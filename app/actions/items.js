import GetMovies from '../helpers/apiUtils';
import { NEW_MOVIES_URL, imagePrefix } from '../helpers/constants';

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
    // dispatch(itemsIsLoading(true));

    const fetchCall = new GetMovies(NEW_MOVIES_URL, imagePrefix);
    return fetchCall.fetchNewMovies(fetchCall.url, fetchCall.imagePrefix)
    .then((items) => {
      dispatch(itemsFetchDataSuccess(items));
    });
  };
};
