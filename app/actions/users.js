import ApiUtils from '../helpers/apiUtils';
import { saveToCache, formatAuthForStorage } from '../helpers/storageUtils';
import { fetchFavoritesAction } from './favorites';

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

export const saveUserToCache = (response) => {
  return {
    type: 'SAVE_USER_TO_CACHE',
    response,
  };
};

export const userLoginFromCache = (user) => {
  const { name, email, id } = user.data;
  return (dispatch) => {
    dispatch(userIsAuthenticated(true));
    dispatch(userAuthenticationSuccess({ data: { name, email, id } }));
    dispatch(fetchFavoritesAction(id));
  };
};

export const createAccountAction = (state) => {
  return (dispatch) => {
    return new ApiUtils().createUser(state.name, state.email, state.password)
      .then((response) => {
        if (response.name === 'Error') throw Error('Unable to create user.');
        const user = formatAuthForStorage(state.name, state.email, response.id);
        saveToCache('authenticatedUser', user);
        dispatch(userLoginFromCache(user));
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
      });
  };
};

export const makeUserCall = ({ email, password }) => {
  return (dispatch) => {
    console.log('wtf', dispatch);
    return new ApiUtils().fetchUser(email, password)
      .then((response) => {
        if (response.name === 'Error') throw Error('User not found.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
        saveToCache('authenticatedUser', response.data);
        dispatch(fetchFavoritesAction(response.data.id));
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};
