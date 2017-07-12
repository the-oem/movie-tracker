import React, { Component } from 'react';
import { object } from 'prop-types';
import Movie from '../Movie/Movie';

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
        {content}
      </div>
    );
  }
}
