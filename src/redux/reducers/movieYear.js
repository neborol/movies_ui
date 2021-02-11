import { 
    MOVIE_YEAR_CHANGE,
    MOVIE_YEAR_CHANGE_ERROR
 } from '../actions/types';


const initialStoreSlice = {
    orientation: 'horizontal'
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function movieYear (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case NAVIGATION_ORIENTATION:
            return {
                ...storeSlice,
                orientation: payload
            }


        case NAVIGATION_ERROR:
            return {
                ...storeSlice,
                orientation: 'horizontal'
            }
        
        default: return storeSlice
    }
}