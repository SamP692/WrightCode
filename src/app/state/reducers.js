import { combineReducers } from 'redux';
import * as reducersList from './reducersList';

const reducers = combineReducers(reducersList);

export default reducers;
