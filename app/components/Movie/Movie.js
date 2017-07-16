import React from 'react';
import { object } from 'prop-types';

const Movie = ({ movie, handleFavorite, favorite, showMore, displayInfo }) => {
  function handleClick() {
    handleFavorite(movie);
  }

  function handleClickDisplayInfo() {
    showMore(movie.title);
  }

  // function posterView() { return (<img className='movie-poster' src={`${movie.poster}`} /> <h1>alksdjalksdalkd</h1>)}
  //
  // function posterView() {
  //   return (<div>Hello </div>
  // <h1>adsasdasdasdasdad</h1>);
  // }
  const renderClass = (favorite) ? 'favorite-btn active' : 'favorite-btn';

  const posterView =

  <div className='poster-favorite-container' onClick={handleClickDisplayInfo}>
    <img className='movie-poster' src={`${movie.poster}`} />
    <div className={renderClass}></div>
  </div>;


  const infoView =

  <div className='poster-favorite-container' onClick={handleClickDisplayInfo}>
    <img className='movie-poster' src={`${movie.poster}`} />
      <div className='info-view'>
        <p>Title: {movie.title}</p>
        <p>Title: {movie.overview}</p>
        <p>Title: {movie.releaseDate}</p>
        <p>Title: {movie.popularity}</p>
        <div className={renderClass}></div>
      </div>
  </div>;


  const renderInfo = displayInfo === movie.title ? infoView : posterView;


  return (
    <div className='movie' onClick={handleClick}>

    {renderInfo}
      <div className='movie-shelf-edge'></div>
    </div>
  );
};

export default Movie;
