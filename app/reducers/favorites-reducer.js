export const userAddFavorite = (state = {}, action) => {
  switch (action.type) {
    case 'USER_ADD_FAVORITE':
      return {
        addFavoriteMessage: action.message,
      };

    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'USER_FETCH_FAVORITES_SUCCESS':
      return [...action.response.data];

    default:
      return state;
  }
};
