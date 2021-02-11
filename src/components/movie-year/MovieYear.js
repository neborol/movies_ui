import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';


const MovieYear = () => {
    const yearData = useSelector(store => store.movieYear.movieYearData);
    // const [movies, setMovies] = useState({});



    return (
        <div className="movieYear-container">
           <h3>Name / Year last Movie :</h3>
    <div>{ yearData.name } - { yearData.year }</div>
           <hr style={{width: '200px', marginInlineStart: 0}} />
        </div>
    )
}


export default MovieYear;