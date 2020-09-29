import React from 'react';

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({ title, vote_average, poster_path, overview }) => (
  <div className='movie'>
    <img 
      src={IMG_PATH + poster_path}
      alt={title}
    />
    <div className='movie-info'>
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className='overview'>
      <h4>Overview</h4>
      {overview}
    </div>
  </div>
)

export default Movie;