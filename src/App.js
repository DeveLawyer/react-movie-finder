import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';


const API_KEY = 'c7b0c63482ff66b0ccc08caa0d7dc895';
const POP_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(POP_URL);
  }, [])

  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();

    setMovies(respData.results);
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    getMovies(SEARCH_URL + searchTerm);

    setSearchTerm('');
  }

  return (
    <>
      <header>
        <h1 className="title">what<span className="title-span">2</span>watch</h1>
        <form id='form' onSubmit={handleOnSubmit}>
          <input 
            id='search' 
            className='search' 
            placeholder='Search'
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <main className="main">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />
        })}
      </main>
    </>
  );
}

export default App;
