import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/app.jsx';
import MovieIndex from './components/movieIndex.jsx';
import rootReducer from './reducers';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({ routers: routerReducer, redux: rootReducer }),
  devTools,
  applyMiddleware(middleware, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <App/>
    </ConnectedRouter>
  </Provider>, document.getElementById('main'));
