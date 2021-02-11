import {
    CHARACTER_CHANGE,
    CHARACTER_CHANGE_ERROR,
    DATA_LOADING
} from './types';

// Broadcast Character change
export const changeCharacter = (characterURL) => async dispatch => {
    // Fragile code that can break because of side effects, hence try-catch block.
    try {
         dispatch({
             type: CHARACTER_CHANGE, // Dispatch an action to let the app know that the character name has changed
             payload: characterURL
         });
    } 
    catch (err) {
         // In the case where the character change causes an error. 
         dispatch({
             type: CHARACTER_CHANGE_ERROR
         });
    }
 }


// Broadcast Character change
export const dataLoading = (val) => async dispatch => {
    dispatch({
        type: DATA_LOADING, // Dispatch an action to let the app know that the character name has changed
        payload: val
    });
 }
 