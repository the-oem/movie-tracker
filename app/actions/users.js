import ApiUtils from '../helpers/apiUtils';
import { saveToCache } from '../helpers/storageUtils';

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

export const makeUserCall = ({ email, password }) => {
  return (dispatch) => {
    return new ApiUtils().fetchUser(email, password)
      .then((response) => {
        if (response.name === 'Error') throw Error('User not found.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
        saveToCache('authenticatedUser', response.data);
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};
