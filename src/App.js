import React, { useEffect, useState } from 'react';

import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

import Character from './components/character-selector/Character';
import MovieList from './components/movie-list/MovieList';
import MovieYear from './components/movie-year/MovieYear';


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { changeCharacter } from './redux/actions/characters';
import { changeMovieList } from './redux/actions/movieList';
import { changeMovieYear } from './redux/actions/movieYear';

import './App.css';

function App() {

  useEffect(() => {
    
  });


  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
          <Navbar />
            <hr />
            <div className="main-content">
              <h1>Movie Sellector Widget</h1>
              <div className="movie-widgets">
                <Character />
                <MovieList />
                <MovieYear />
              </div>
            </div>
          <Footer />  
      </Container>
    </>
  );
}

export default App;
