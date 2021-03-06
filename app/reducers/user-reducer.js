export const userIsAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return action.isAuthenticated;

    default:
      return state;
  }
};

export const userAuthenticationFailure = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_FAILURE':
      return action.error.message;

    case 'USER_AUTHENTICATION_SUCCESS':
      return {};

    default:
      return state;
  }
};

export const userAuthenticationSuccess = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_SUCCESS':

      return {
        name: action.user.data.name,
        email: action.user.data.email,
        id: action.user.data.id,
      };

    default:
      return state;
  }
};
