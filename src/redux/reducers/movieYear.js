import { 
    MOVIE_YEAR_CHANGE,
    MOVIE_YEAR_CHANGE_ERROR
 } from '../actions/types';


const initialStoreSlice = {
    movieYear: '0000'
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function movieYear (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case MOVIE_YEAR_CHANGE:
            return {
                ...storeSlice,
                movieYear: payload
            }


        case MOVIE_YEAR_CHANGE_ERROR:
            return {
                ...storeSlice,
                movieYear: '0000'
            }
        
        default: return storeSlice
    }
}