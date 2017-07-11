// We want these paths:
// '/'
// '/favorites'
// '/login'
// '/create-account'


import React, { Component } from 'react';
import { object } from 'prop-types';
import LoginContainer from '../containers/Login/LoginContainer';
import Header from './Header/Header';
import ShelfView from './ShelfView/ShelfView';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShelfView />
      </div>
    );
  }
}
