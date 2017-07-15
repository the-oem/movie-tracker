import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';
import { userIsAuthenticated, userAuthenticationSuccess, userAuthenticationFailure } from './user-reducer';
import { userAddFavorite, favorites } from './favorites-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  userIsAuthenticated,
  userAuthenticationSuccess,
  userAuthenticationFailure,
  userAddFavorite,
  favorites,
  router: routerReducer(),
});

export default rootReducer;
