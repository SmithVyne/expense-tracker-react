import {combineReducers} from 'redux';
import currentUser from './user';
import categories from './categories';
import expenses from './expenses';

export default combineReducers({currentUser, categories, expenses})