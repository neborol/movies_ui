import { combineReducers } from 'redux'; // The combineReducer puts together all the individual reducers
import characters from './characters';
import movieList from './movieList';
import movieYear from './movieYear';

export default combineReducers({
    characters, // These represents just a specific section of the store that would be referenced within the app.
    movieList,
    movieYear
});