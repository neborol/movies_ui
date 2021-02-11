import { 
    MOVIE_YEAR_CHANGE,
    MOVIE_YEAR_CHANGE_ERROR
 } from '../actions/types';


const initialStoreSlice = {
    movieYearData: {
        name: 'No Year Name',
        year: '0000'
    }
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function movieYear (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case MOVIE_YEAR_CHANGE:
            return {
                ...storeSlice,
                movieYearData: payload
            }


        case MOVIE_YEAR_CHANGE_ERROR:
            return {
                ...storeSlice,
                movieYearData: {
                    name: 'No Year Name',
                    year: '0000'
                }
            }
        
        default: return storeSlice
    }
}