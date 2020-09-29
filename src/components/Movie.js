import React from 'react';

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

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

const Movie = ({ title, vote_average, poster_path, overview }) => {
  return (
    <div className='movie'>
      <img 
        src={poster_path ? (IMG_PATH + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80'}
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