import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Login from '../Login/Login';
import { getFromCache } from '../../helpers/storageUtils';

export default class ShelfView extends Component {
  constructor() {
    super();
    this.state = {
      displayInfo: false,
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
    const user = getFromCache('authenticatedUser');
    if (user) {
      this.props.logUserIn(user);
      this.props.fetchFavorites(user.id);
    }
  }

  handleFavorite(movie) {
    if (this.props.userId === undefined) {
      console.log('user not logged in, figure out how to redirect', this);
      // TODO Figure out how to redirect to /login
    } else {
      const exists = this.props.favorites.find(element => element.movie_id === movie.id);
      (exists) ?
        this.props.deleteFavorite(this.props.userId, movie) :
        this.props.addFavorite(this.props.userId, movie);
    }
  }

  showMore(bool) {
    const newState = this.state.displayInfo ? false : bool;
    this.setState({ displayInfo: newState });
  }

  render() {
    // TODO Add a nicer 'loading' screen. Maybe a div with a nice looking film spinner.

    const content = this.props.isLoading ?
      'loading..' :
      this.props.items.map((movie, i) => {
        return <Movie
          displayInfo={this.state.displayInfo}
          showMore = {this.showMore.bind(this)}
          key={movie.title + i}
          movie={movie}
          favorite={this.props.favorites.find(element => element.movie_id === movie.id)}
          handleFavorite={this.handleFavorite.bind(this)} />;
      });

    return (
      <div className='shelf-view'>
        {content}
      </div>
    );
  }
}
