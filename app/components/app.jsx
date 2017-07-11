// We want these paths:
// '/'
// '/favorites'
// '/login'
// '/create-account'


import React, { Component } from 'react';
import { object } from 'prop-types';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
      </div>
    );
  }
}
