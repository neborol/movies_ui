import {
    MOVIE_ITEM_CHANGE,
    MOVIE_ITEM_CHANGE_ERROR
} from './types';

// Broadcast Movie-item change
export const changeMovieItem = (item) => dispatch => {
    dispatch({
        type: MOVIE_ITEM_CHANGE, // Dispatch an action to let the app know that the movie item has changed
        payload: item
    });

    dispatch({
        type: MOVIE_ITEM_CHANGE_ERROR
    });
}
 