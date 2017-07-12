// We want these paths:
// '/'
// '/favorites'
// '/login'
// '/create-account'


import React, { Component } from 'react';
import Header from './Header/Header';
import ShelfViewContainer from '../containers/ShelfView/ShelfViewContainer';
import LoginContainer from '../containers/Login/LoginContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShelfViewContainer />
      </div>
    );
  }
}
