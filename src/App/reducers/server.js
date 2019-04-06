import types from '../actions/types';
import { ActionType } from 'redux-promise-middleware';

// Estado inicial
const initialState = {
  albums: [],
  songs: [],
  albumsLoading: true,
  albumsError: false,
  songsLoading: true,
  songsError: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log("reducer state ", state);
  console.log("reducer action ", action);
  switch(action.type) {
    case `ALBUMS_${ActionType.Pending}`:
      return {
        ...state,
        albumsLoading: true,
        albumsError: false
      };
    case `ALBUMS_${ActionType.Fulfilled}`:
      return {
        ...state,
        albumsLoading: false,
        albumsError: false,
        albums: action.payload
      };
    case `ALBUMS_${ActionType.Rejected}`:
      return {
        ...state,
        albumsLoading: false,
        albumsError: true,
      };
    case `SONGS_${ActionType.Pending}`:
      return {
        ...state,
        songsLoading: true,
        songsError: false
      };
    case `SONGS_${ActionType.Fulfilled}`:
      return {
        ...state,
        songsLoading: false,
        songsError: false,
        songs: action.payload
      };
    case `SONGS_${ActionType.Rejected}`:
      return {
        ...state,
        songsLoading: false,
        songsError: true,
      };
    default:
      return state;
  }
}

export default reducer;
