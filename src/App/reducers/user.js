import types from '../actions/types';

// Estado inicial
const initialState = {
  name: '',
  albums: [],
  songs: [],
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SIGN_USER:
      return {
        ...state,
        name: action.username,
        signedIn: true
      };
    case types.ADD_ALBUM:
      if (state.albums.includes(action.albumId) === false) {
        return {
          ...state,
          albums: [
            ...state.albums, 
            action.albumId
          ]
        };
      }
      return state;
    case types.ADD_SONG:
      if (state.songs.includes(action.songId) === false) {
        return {
          ...state,
          songs: [
            ...state.songs, 
            action.songId
          ]
        };
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
