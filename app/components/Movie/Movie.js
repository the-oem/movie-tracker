import React from 'react';
import { object } from 'prop-types';

const Movie = ({ data, handleFavorite }) => {
  function handleClick() {
    handleFavorite(data);
  }

  return (
    <div className='movie' onClick={handleClick}>
      <img className='movie-poster' src={`${data.poster}`} />
    </div>
  );
};

export default Movie;
