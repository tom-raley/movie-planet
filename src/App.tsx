import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Nav from './Components/Nav'
import MovieCard from './Components/MovieCard';

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, [])

  return (
    <div style={{fontFamily: 'SF Pro Display', color: '#ffffff'}}>
      <div style={{background: '#1C1C24'}}>
            <Nav />
      </div>
      <div style={{background: '#131419'}}>
        <div style={{fontSize: '28px', paddingTop: '2rem', paddingLeft: '10rem'}}>Popular Movies</div>
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
