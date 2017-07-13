import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';
import { userIsAuthenticated, userAuthenticationSuccess } from './user-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  userIsAuthenticated,
  userAuthenticationSuccess,
  router: routerReducer(),
});

export default rootReducer;
