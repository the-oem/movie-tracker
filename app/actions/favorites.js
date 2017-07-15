import ApiUtils from '../helpers/apiUtils';

export const userAddFavorite = (response) => {
  return {
    type: 'USER_ADD_FAVORITE',
    response,
  };
};

export const userGetFavorites = (response) => {
  return {
    type: 'USER_FETCH_FAVORITES_SUCCESS',
    response,
  };
};

export const applicationDatabaseError = (error) => {
  return {
    type: 'APPLICATION_DATABASE_FAILURE',
    error,
  };
};

export const addFavoriteAction = (userId, movie) => {
  return (dispatch) => {
    return new ApiUtils().addFavorite(userId, movie)
    .then((response) => {
      if (response.name === 'Error') throw Error('Unable to add favorite.');
      dispatch(userAddFavorite(response));
    })
    .catch(err => dispatch(applicationDatabaseError(err)));
  };
};

export const fetchFavoritesAction = (userId) => {
  return (dispatch) => {
    return new ApiUtils().getFavorites(userId)
    .then((response) => {
      if (response.name === 'Error') throw Error('Unable to retrieve favorites.');
      dispatch(userGetFavorites(response));
    })
    .catch(err => dispatch(applicationDatabaseError(err)));
  };
};
