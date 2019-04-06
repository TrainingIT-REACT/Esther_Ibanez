import { ActionType } from 'redux-promise-middleware';

// Estado inicial
const initialState = {
  list: [],
  isLoading: true,
  hasError: false,
}

const REDUCER_NAME = 'ALBUMS';

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  console.log("reducer albums state ", state);
  console.log("reducer albums action ", action);
  switch(action.type) {
    case `${REDUCER_NAME}_${ActionType.Pending}`:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case `${REDUCER_NAME}_${ActionType.Fulfilled}`:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        list: action.payload
      };
    case `${REDUCER_NAME}_${ActionType.Rejected}`:
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
