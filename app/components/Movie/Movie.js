import React from 'react';
import { object } from 'prop-types';

const Movie = ({ movie, handleFavorite, favorite }) => {
  function handleClick() {
    handleFavorite(movie);
  }

  const renderClass = (favorite) ? 'favorite-btn active' : 'favorite-btn';

  return (
    <div className='movie' onClick={handleClick}>
      <div className='poster-favorite-container'>
        <img className='movie-poster' src={`${movie.poster}`} />
        <div className={renderClass}></div>
      </div>
      <div className='movie-shelf-edge'></div>
    </div>
  );
};

export default Movie;
