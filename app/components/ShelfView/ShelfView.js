import React, { Component } from 'react';
import { object } from 'prop-types';
import Movie from '../Movie/Movie';
import { makeFetchCall } from '../../actions/items';
import key from '../../helpers/constants';

export default class ShelfView extends Component {
  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    const imagePrefix = 'https://image.tmdb.org/t/p/w500';
    console.log('mounted', this.props);
    this.props.fetchData(url, imagePrefix);
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
