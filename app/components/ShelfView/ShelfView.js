import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Login from '../Login/Login';
import { getFromCache } from '../../helpers/storageUtils';

export default class ShelfView extends Component {
  componentDidMount() {
    this.props.fetchData();

    const user = getFromCache('authenticatedUser');
    if (user) {
      this.props.logUserIn(user);
    }
  }

  render() {
    const content = this.props.isLoading ?
      'loading..' :
      this.props.items.map((movie, i) => <Movie key={movie.title + i} data={movie}/>);

    return (
      <div className='shelf-view'>
        <Route exact path='/testing' render={({ match }) => <LoginContainer />} />
        {content}
      </div>
    );
  }
}
