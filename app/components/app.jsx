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
import { NEW_MOVIES_URL } from '../helpers/constants';
import { imagePrefix } from '../helpers/constants';
import GetMovies from '../helpers/apiUtils';
import { makeFetchCall } from '../actions/items';

export default class App extends Component {

  componentDidMount() {
    makeFetchCall();
  }

  render() {
    return (
      <div>
        <Header />
        <ShelfView />
      </div>
    );
  }
}
