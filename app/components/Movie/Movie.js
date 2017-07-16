import React from 'react';
import { object } from 'prop-types';

const Movie = ({ movie, handleFavorite }) => {
  function handleClick() {
    handleFavorite(movie);
  }

  return (
    <div className='movie' onClick={handleClick}>
      <div className='poster-favorite-container'>
        <img className='movie-poster' src={`${movie.poster}`} />
        <div className='favorite-btn'></div>
      </div>
      <div className='movie-shelf-edge'></div>
    </div>
  );
};

export default Movie;
