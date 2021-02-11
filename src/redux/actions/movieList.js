import {
    MOVIE_ITEM_CHANGE,
    MOVIE_ITEM_CHANGE_ERROR
} from './types';

// Broadcast Movie-item change
export const changeMovieItem = (item) => async dispatch => {

    // Fragile code that can break because of side effects, hence try-catch block.
    try {
        dispatch({
            type: MOVIE_ITEM_CHANGE, // Dispatch an action to let the app know that the movie item has changed
            payload: item
        });
 
    } catch (err) {
         // In the case where the movie item change causes an error.
        dispatch({
            type: MOVIE_ITEM_CHANGE_ERROR
        });
    }
}
 