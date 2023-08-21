import  { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
//reducer a function that returns some amount of data
});


