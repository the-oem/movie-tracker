import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';
import { userIsAuthenticated, userAuthenticationSuccess, userAuthenticationFailure, userAddFavorite } from './user-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  userIsAuthenticated,
  userAuthenticationSuccess,
  userAuthenticationFailure,
  userAddFavorite,
  router: routerReducer(),
});

export default rootReducer;
