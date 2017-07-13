export const userIsAuthenticated = (state = false, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      console.log('hittin\' dat reducer 1');
      return action.isAuthenticated;

    default:
      return state;
  }
};

export const userAuthenticationSuccess = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATION_SUCCESS':
      console.log('hittin\' dat reducer 2');
      return { name: action.user.name, user_id: action.user.id };

    default:
      return state;
  }
};