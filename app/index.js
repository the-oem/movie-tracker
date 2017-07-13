import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from './containers/App/AppContainer';
import MovieIndex from './components/movieIndex.jsx';
import rootReducer from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(rootReducer,
  devTools,
  applyMiddleware(middleware, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <AppContainer />
    </ConnectedRouter>
  </Provider>, document.getElementById('main'));
