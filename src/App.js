import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';


const API_KEY = 'c7b0c63482ff66b0ccc08caa0d7dc895';
const POP_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await fetch(POP_URL);
      const respData = await resp.json();
      console.log(respData.results);
      setMovies(respData.results);
    }

    getMovies();
  }, [])

  return (
    <div>
      <header>
        <h1 class="title">what<span class="title-span">2</span>watch</h1>
        <form id='form'>
          <input id='search' className='search' placeholder="Search"></input>
        </form>
      </header>
      <main className="main">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />
        })}
      </main>
    </div>
  );
}

export default App;
