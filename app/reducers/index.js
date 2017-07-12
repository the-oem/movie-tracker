import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  router: routerReducer(),
});

export default rootReducer;
