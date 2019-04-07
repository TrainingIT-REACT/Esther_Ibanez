import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import promise from 'redux-promise-middleware';

// Reducers
//import todos from './reducers/todos';
import user from './reducers/user';
import albums from './reducers/albums';
import songs from './reducers/songs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({ user, albums, songs}), 
    composeEnhancers(
        applyMiddleware(promise)
    )
);