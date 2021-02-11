import React from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const MovieList = () => {

    const URL = useSelector(store => store.characters.characterURL);
    console.log('PassedURL', URL);

    return (
        <div className="movieList-container">
           <h3>Movie List:</h3>
           <div>
               List of all the movies for selected character
           </div>
        </div>
    )
}


export default MovieList;