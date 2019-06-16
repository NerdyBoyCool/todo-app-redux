import { combineReducers } from 'redux';
import todoReducer from './todo';

// ./reducers/*.jsを組み合わせて、一つのreducerを返す。
export default combineReducers({todoReducer})
