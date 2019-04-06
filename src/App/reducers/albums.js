import { ActionType } from 'redux-promise-middleware';

// Estado inicial
const initialState = {
  albums: [],
  isLoading: true,
  hasError: false,
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log("reducer albums state ", state);
  console.log("reducer albums action ", action);
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
        list: action.payload
      };
    case `ALBUMS_${ActionType.Rejected}`:
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
