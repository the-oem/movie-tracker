import React from 'react';
import { object } from 'prop-types';

const Movie = ({ movie, handleFavorite, favorite, displayInfo, toggleInfo }) => {
  function handleClick() {
    handleFavorite(movie);
  }

  console.log(movie);

  const frontClass = 'movie-poster face';
  const backClass = 'back face';
  const cardContainer = displayInfo.includes(movie.title) ?
      'poster-favorite-container flipped' :
      'poster-favorite-container';


  const renderClass = (favorite) ? 'favorite-btn active' : 'favorite-btn';

  function flipCard(e) {
    toggleInfo(movie.title);
  }

  return (
    <div className='movie' onClick={flipCard}>
      <div className={renderClass} onClick={handleClick}></div>
      <section className={cardContainer}>
        <img className={frontClass} src={`${movie.poster_path}`} />
        <div className={backClass}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p>Released: {movie.releaseDate}</p>
          <p>Average Rating: {movie.voteAverage}</p>
        </div>
      </section>
      <div className='movie-shelf-edge'></div>
    </div>
  );
};

export default Movie;
