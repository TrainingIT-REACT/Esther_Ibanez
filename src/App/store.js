import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
//import todos from './reducers/todos';
import user from './reducers/user';
import server from './reducers/server';

export default createStore(
    combineReducers({ user, server }), 
    applyMiddleware(promise)
);