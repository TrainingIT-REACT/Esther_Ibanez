import types from '../actions/types';

// Estado inicial
const initialState = {
  name: '',
  albums: [],
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log('reducer user ', state, action)
  switch(action.type) {
    case types.SIGN_USER:
      return {
        ...state,
        name: action.username,
        signedIn: true
      };
    case types.ADD_ALBUM:
      return {
        ...state,
        albums: [
          ...state.albums, 
          action.albumId
        ]
      };
    case types.ADD_ALBUM:
      return {
        ...state,
        songs: [
          ...state.songs, 
          action.songId
        ]
      };
    default:
      return state;
  }
}

export default reducer;
