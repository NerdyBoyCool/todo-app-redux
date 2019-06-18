import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todos from './todos';

// ./reducers/*.jsを組み合わせて、一つのreducerを返す。
export default combineReducers({ todos, form })
