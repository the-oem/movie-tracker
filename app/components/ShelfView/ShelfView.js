import React, { Component } from 'react';
import { object } from 'prop-types';
import { Route } from 'react-router-dom';
import Movie from '../Movie/Movie';
import Login from '../Login/Login';

export default class ShelfView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const content = this.props.isLoading ?
      'loading..' :
      this.props.items.map((movie, i) => <Movie key={movie.title + i} data={movie}/>);

    return (
      <div className='shelf-view'>
        <Route exact path='/testing' component={Login} />
        {content}
      </div>
    );
  }
}
