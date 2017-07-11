import React from 'react';
import { object } from 'prop-types';
import './Movie.css';

const Movie = () => {
  return (
    <div className='movie'>
      <h2>Title</h2>
      <p>Release Year</p>
      <p>Rating</p>
      <p>Overview</p>
    </div>
  );
};

export default Movie;