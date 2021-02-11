import React from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const MovieList = () => {
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