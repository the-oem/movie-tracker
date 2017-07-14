import * as actions from './items';

describe('ITEMS ACTIONS FOR OUTGOING API CALLING & RECEIVING', () => {
  it('itemsHasErrored should return a boolean', () => {
    const action = actions.itemsHasErrored(false);


    expect(action.hasErrored).toEqual(false);
    expect(action.type).toEqual('ITEMS_HAS_ERRORED');
  });

  it('itemsisLoading should return a boolean', () => {
    const action = actions.itemsIsLoading(true);


    expect(action.isLoading).toEqual(true);
    expect(action.type).toEqual('ITEMS_IS_LOADING');
  });

  it('itemsFetchDataSuccess should return a boolean', () => {
    const action = actions.itemsFetchDataSuccess({ data: 'data' });


    expect(action.items).toEqual({ data: 'data' });
    expect(action.type).toEqual('ITEMS_FETCH_DATA_SUCCESS');
  });
});
