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

export const makeUserCall = (email, password) => {
  console.log('make user call action');
  return (dispatch) => {
    return new ApiUtils().fetchUser(email, password)
      .then((user) => {
        dispatch(userIsAuthenticated(true));
        dispatch(userAuthenticationSuccess(user));
      })
      .catch(err => console.log('error bro: ', err));
  };
};