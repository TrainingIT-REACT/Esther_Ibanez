import types from '../actions/types';
import { ActionType } from 'redux-promise-middleware';

// Estado inicial
const initialState = {
  albums: [],
  songs: [],
  isLoading: true,
  hasError: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log("reducer state ", state);
  console.log("reducer action ", action);
  switch(action.type) {
    case `ALBUMS_${ActionType.Pending}`:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case `ALBUMS_${ActionType.Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        albums: action.payload
      };
    case `ALBUMS_${ActionType.Rejected}`:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case `SONGS_${ActionType.Pending}`:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case `SONGS_${ActionType.Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        songs: action.payload
      };
    case `SONGS_${ActionType.Rejected}`:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default reducer;
