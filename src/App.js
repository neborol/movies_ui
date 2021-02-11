import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

import Character from './components/character-selector/Character';
import MovieList from './components/movie-list/MovieList';
import MovieYear from './components/movie-year/MovieYear';


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Spinner from './utilities/Spinner';

import './App.css';

function App() {
  const config = {
    headers: {
        'Content-type': 'application/json'
    }
  }

  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true); // true = start spinner

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('https://swapi.dev/api/films/', config);
        setChars(resp.data.results[0].characters);
        setLoading(false); // Turn off the loader
      } catch (error) {
        setLoading(false); // Turn off the loader
        alert('Something went wrong with getting initial data. Please try again.');
      }
    }

    fetchData();
    
  }, []);

  


  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
          <Navbar />
            <div className="main-content">
            { loading && (<Spinner loading={loading}/>) }
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
