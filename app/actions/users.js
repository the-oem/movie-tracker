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

export const makeUserCall = ({ email, password }) => {
  return (dispatch) => {
    return new ApiUtils().fetchUser(email, password)
      .then((response) => {
        if (response.name === 'Error') throw Error('User not found.');
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(response));
        // TODO Reset any existing error messages
      })
      .catch((err) => {
        dispatch(userIsAuthenticated(false));
        dispatch(userAuthenticationFailure(err));
      });
  };
};
