import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const config = {
    headers: {
        'Content-type': 'application/json'
    }
  }

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const resp = await axios.get('https://swapi.dev/api/films/', config);
      console.log('DATA:', resp.data.results[0]);
      setChars(resp.data.results[0].characters);
    }

    queryData();
  }, []);

  


  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
          <Navbar />
            <hr />
            <div className="main-content">
              <h1>Movie Sellector Widget</h1>
              <div className="movie-widgets">
                <Character characters={chars}/>
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
