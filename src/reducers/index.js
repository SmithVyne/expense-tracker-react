import {combineReducers} from 'redux';
import currentUser from './user';
import categories from './categories';
import expenses from './expenses';
import date from './date';

export default combineReducers({currentUser, categories, expenses, date});