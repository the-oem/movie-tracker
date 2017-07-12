import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items-reducer';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
});

export default rootReducer;
