import React from 'react';
import { object } from 'prop-types';

const Movie = ({ movie, handleFavorite, favorite, displayInfo, toggleInfo }) => {
  function handleClick() {
    handleFavorite(movie);
  }

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
          <p><span className="bold">Released: </span>{movie.releaseDate}</p>
          <p><span className="bold">Average Rating: </span>{movie.voteAverage}</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </section>
      <div className='movie-shelf-edge'></div>
    </div>
  );
};

export default Movie;
