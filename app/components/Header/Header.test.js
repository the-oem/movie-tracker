import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import HeaderContainer from '../../containers/Header/HeaderContainer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import { Route } from 'react-router-dom';


const thunk = ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};
//
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// }


const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke };
};

const homeLocation = {
  pathname: '/',
};

const loginLocation = {
  pathname: '/login',
};

// function Route() {
//   this.route = {};
//   this.computeMatch = {};
// }


describe('HEADER COMPONENT & CONTAINER TEST', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares)();


  // <ConnectedRouter history={history} >
  //   <Route to='/' component={AppContainer} />
  // </ConnectedRouter>;

  // history = {};

  // const wrapper = mount(<Provider store={mockStore}><ConnectedRouter history={{}} ><HeaderContainer location={location} history={'http://localhost:3000/'}/></ConnectedRouter></Provider>);
  // const wrapper = mount(<Provider store={mockStore}><HeaderContainer location={location} history={'http://localhost:3000/'}/></Provider>);


  it('renders a component element', () => {
    const dom = shallow(<Header location={location}/>);

    expect(dom.find('.header')).toHaveLength(1);
  });
  //
  it('renders 2 buttons if not logged in and on the home page', () => {
    const dom = shallow(<Header location={homeLocation}/>);

    expect(dom.find('button').length).toEqual(2);
  });
  it('renders home button if location passed in isnt home', () => {
    const dom = shallow(<Header location={loginLocation}/>);


    expect(dom.find('button').length).toEqual(1);
  });
});
