import {combineReducers} from 'redux';
import currentUser from './user';
import categories from './categories';

export default combineReducers({currentUser, categories})