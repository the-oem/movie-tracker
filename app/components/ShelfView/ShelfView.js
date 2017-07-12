import React, { Component } from 'react';
import { object } from 'prop-types';
import Movie from '../Movie/Movie';

export default class ShelfView extends Component {
  componentDidMount() {
    console.log('mounted');
    this.props.fetchData();
  }

  render() {
    return (
    <div className='shelf-view'>
      Shelf that includes....hard-coded movies...
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
    );
  }

}
