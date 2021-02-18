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
import { useDispatch } from 'react-redux';
import { yearChange } from './redux/actions/movieYear';

import { formatYear } from './utilities/helpers';
import './App.css';

function App() {
  const config = {
    headers: {
        'Content-type': 'application/json'
    }
  }

  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true); // true = start spinner

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch initial data that would list the characters and then take it from there
        const resp = await axios.get('https://swapi.dev/api/people/', config);
        setChars(resp.data.results);
        setLoading(false); // Turn off the loader
        dispatch(yearChange(formatYear( resp.data.results[resp.data.results.length - 1].created)))
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
