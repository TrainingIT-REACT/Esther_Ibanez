import { ActionType } from 'redux-promise-middleware';

// Estado inicial
const initialState = {
  songs: [],
  isLoading: true,
  hasError: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log("reducer songs state ", state);
  console.log("reducer songs action ", action);
  switch(action.type) {
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
        list: action.payload
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
