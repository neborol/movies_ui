import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changeMovieYear } from '../../redux/actions/movieYear';
import { dataLoading } from '../../redux/actions/characters';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { formatYear } from '../../utilities/helpers';
import Spinner from '../../utilities/Spinner';
import './movieList.css';


const MovieList = () => {
    const URL = useSelector(store => store.characters.characterURL);
    const loading = useSelector(store => store.characters.spinnerLoading);

    // const [loading, setLoading] = useState(false); // true = start spinner
    const [movies, setMovies] = useState([]);

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        const getMovies = async () => {
            if (URL) {
                try {
                    const resp = await axios.get(URL, config);
                    const yearData = {
                        name: resp.data.name,
                        year: formatYear(resp.data.edited)
                    }
                    setMovies(resp.data.films); // Update the available films
                    dispatch(changeMovieYear(yearData)); // Broadcast movie year data
                    dispatch(dataLoading(false));
                    // setLoading(false); // Turn off the loader
                } catch (error) {
                    // setLoading(false); // Turn off the loader
                    alert('Something went wrong with getting the movies. Please try again.');
                }
            }
        }

        getMovies();

    }, [URL]);  


    return (
        <div className="movieList-container">
            { loading && (<Spinner loading={loading}/>) }
           <h3>Movie List:</h3>
           { 
                (movies.length > 0) ? (
                    <div className="movie-list">
                            <List component="nav" aria-label="secondary mailbox folders">
                                {
                                    movies && movies.map(movie => {
                                        return (<ListItem key={movie} button><ListItemText primary={movie} /></ListItem>);
                                    })
                                }
                            </List>
                    </div>
                ) : (<div> <i>No Movies Listed yet!</i></div>)
            }
        </div>
    )
}


export default MovieList;