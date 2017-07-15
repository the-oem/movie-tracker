import ApiUtils from '../helpers/apiUtils';

export const userIsAuthenticated = (bool) => {
  return {
    type: 'USER_AUTHENTICATED',
    isAuthenticated: bool,
  };
};

export const userAuthenticationSuccess = (user) => {
  return {
    type: 'USER_AUTHENTICATION_SUCCESS',
    user,
  };
};

export const userAuthenticationFailure = (error) => {
  return {
    type: 'USER_AUTHENTICATION_FAILURE',
    error,
  };
};

export const userAddFavorite = (response) => {
  console.log('in user add favorite');
  return {
    type: 'USER_ADD_FAVORITE',
    response,
  };
};

export const applicationDatabaseError = (error) => {
  return {
    type: 'APPLICATION_DATABASE_FAILURE',
    error,
  };
};

export const makeUserCall = ({ email, password }) => {
  return (dispatch) => {
    return new ApiUtils().fetchUser(email, password)
      .then((response) => {
        if (response.name === 'Error') throw Error('User not found.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};

export const addToFavorites = (userId, movie) => {
  // const { id, overview, poster, releaseDate, title, voteAverage } = movie;
  console.log('in the action, adding favorite', movie, userId);
  return (dispatch) => {
    return new ApiUtils().addFavorite(userId, movie)
    .then((response) => {
      if (response.name === 'Error') throw Error('Unable to add favorite.');
      dispatch(userAddFavorite(response));
    })
    .catch(err => dispatch(applicationDatabaseError(err)));
  };
};

/*
alpha_id
:
"Wonder_Woman"
id
:
297762
overview
:
"An Amazon princess comes to the world of Man to become the greatest of the female superheroes."
popularity
:
57.363659
poster
:
"https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
releaseDate
:
"2017-05-30"
title
:
"Wonder Woman"
voteAverage
:
7.1
*/
