import React from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const MovieYear = () => {
    return (
        <div className="movieYear-container">
           <h3>Movie Year released:</h3>
           <p>Display of movie year</p>
           <hr style={{width: '200px', marginInlineStart: 0}} />
        </div>
    )
}


export default MovieYear;