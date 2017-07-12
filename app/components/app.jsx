// We want these paths:
// '/'
// '/favorites'
// '/login'
// '/create-account'


import React, { Component } from 'react';
import { object } from 'prop-types';
import LoginContainer from '../containers/Login/LoginContainer';
import Header from './Header/Header';
import ShelfViewContainer from '../containers/ShelfView/ShelfViewContainer';
import { NEW_MOVIES_URL, IMAGE_URL } from '../helpers/constants';
import ApiUtils from '../helpers/apiUtils';
import { makeFetchCall } from '../actions/items';

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
