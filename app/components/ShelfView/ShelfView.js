import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Login from '../Login/Login';
import { getFromCache } from '../../helpers/storageUtils';

export default class ShelfView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: [],
    };
  }

  toggleInfo(title) {
    const newState = [...this.state.displayInfo];

    newState.includes(title) ?
    newState.splice(newState.indexOf(title), 1) :
    newState.push(title);

    this.setState({ displayInfo: newState });
  }

  componentDidMount() {
    this.props.fetchMovies();
    const user = getFromCache('authenticatedUser');
    if (user) {
      this.props.logUserIn(user);
    }
  }

  handleFavorite(movie) {
    if (this.props.userId === undefined) {
      this.props.history.push('/login');
    } else {
      const exists = this.props.favorites.find(element => element.movie_id === movie.movie_id);
      (exists) ?
        this.props.deleteFavorite(this.props.userId, movie) :
        this.props.addFavorite(this.props.userId, movie);
    }
  }

  render() {
    // TODO Add a nicer 'loading' screen. Maybe a div with a nice looking film spinner.
    const renderData = (this.props.location.pathname === '/favorites') ?
      this.props.favorites : this.props.items;

    const content = this.props.isLoading ?
      'loading..' :
      renderData.map((movie, i) => {
        return <Movie
          key={movie.title + i}
          movie={movie}
          favorite={this.props.favorites.find(element => element.movie_id === movie.movie_id)}
          handleFavorite={this.handleFavorite.bind(this)}
          toggleInfo={this.toggleInfo.bind(this)}
          displayInfo={this.state.displayInfo}/>;
      });

    return (
      <div className='shelf-view'>
        {content}
      </div>
    );
  }
}
