import React from 'react';

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const Movie = ({ title, vote_average, poster_path, overview }) => {
  const setClassByTitleLength = (title) => (
    title.length > 40 ? 'small-size' : 'normal-size'
  )

  const setClassByVotes = (votes) => {
    if (votes >= 8) {
      return 'green';
    }
    if (votes >= 5) {
      return 'orange';
    }
    return 'red';
}

  return (
    <div className='movie'>
      <img 
        src={IMG_PATH + poster_path}
        alt={title}
      />
      <div className='movie-info'>
        <h3 className={setClassByTitleLength(title)}>{title}</h3>
        <span className={setClassByVotes(vote_average)}>{vote_average}</span>
      </div>
      <div className='overview'>
        <h4>Overview</h4>
        {overview}
      </div>
    </div>
  )
}

export default Movie;