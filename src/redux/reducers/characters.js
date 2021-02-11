import { 
    CHARACTER_CHANGE,
    CHARACTER_CHANGE_ERROR
 } from '../actions/types';


const initialStoreSlice = {
    characterURL: ''
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function characters (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case CHARACTER_CHANGE:
            return {
                ...storeSlice,
                characterURL: payload
            }


        case CHARACTER_CHANGE_ERROR:
            return {
                ...storeSlice,
                characterURL: ''
            }
        
        default: return storeSlice
    }
}