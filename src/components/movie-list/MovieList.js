import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { changeMovieYear } from '../../redux/actions/movieYear';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { formatYear } from '../../utilities/helpers';
import './movieList.css';


const MovieList = () => {
    const URL = useSelector(store => store.characters.characterURL);
    const [movies, setMovies] = useState([]);
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const dispatch = useDispatch();

    useEffect(async () => {
        if (URL) {
            const resp = await axios.get(URL, config);
            console.log(resp.data);
            const yearData = {
                name: resp.data.name,
                year: formatYear(resp.data.edited)
            }
            setMovies(resp.data.films); // Update the available films
            dispatch(changeMovieYear(yearData)); // Broadcast movie year data
        }
    }, [URL]);  


    return (
        <div className="movieList-container">
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