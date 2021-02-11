import {
    MOVIE_YEAR_CHANGE,
    MOVIE_YEAR_CHANGE_ERROR
} from './types';

// Broadcast Movie-year change
export const changeMovieYear = (item) => async dispatch => {

    // Fragile code that can break because of side effects, hence try-catch block.
    try {
        dispatch({
            type: MOVIE_YEAR_CHANGE, // Dispatch an action to let the app know that the movie year has changed
            payload: item
        });
 
    } catch (err) {
         // In the case where the movie year change causes an error.
        dispatch({
            type: MOVIE_YEAR_CHANGE_ERROR
        });
    }
}