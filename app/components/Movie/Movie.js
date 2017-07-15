import React from 'react';
import { object } from 'prop-types';

const Movie = ({ data }) => {
  return (
    <div className='movie'>
      <div className='poster-favorite-container'>
        <img className='movie-poster' src={`${data.poster}`} />
        <div className='favorite-btn'></div>
      </div>
    </div>
  );
};

export default Movie;
