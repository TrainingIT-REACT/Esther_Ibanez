import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
//import todos from './reducers/todos';
import user from './reducers/user';
import albums from './reducers/albums';
import songs from './reducers/songs';

export default createStore(
    combineReducers({ user, albums, songs }), 
    applyMiddleware(promise)
);