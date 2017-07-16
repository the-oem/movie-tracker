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
      this.props.fetchFavorites(user.id);
    }
  }

  handleFavorite(movie) {
    console.log('Adding to favorites ', movie.title, movie.id);

    if (this.props.userId === undefined) {
      console.log('user not logged in, figure out how to redirect', this);
      // TODO Figure out how to redirect to /login
    } else {
      this.props.addFavorite(this.props.userId, movie);
    }
  }

  render() {
    // TODO Add a nicer 'loading' screen. Maybe a div with a nice looking film spinner.
    const content = this.props.isLoading ?
      'loading..' :
      this.props.items.map((movie, i) => <Movie
        key={movie.title + i}
        movie={movie}
        handleFavorite={this.handleFavorite.bind(this)} />);

    return (
      <div className='shelf-view'>
        {content}
      </div>
    );
  }
}
