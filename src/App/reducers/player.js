import types from '../actions/types';

// Estado inicial
const initialState = {
  src: '',
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log('reducer player ', state, action)
  switch(action.type) {
    case types.PLAY_SONG:
      return {
        ...state,
        src: action.src,
      };
    default:
      return state;
  }
}

export default reducer;