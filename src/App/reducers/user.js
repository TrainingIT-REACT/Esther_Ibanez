import types from '../actions/types';

// Estado inicial
const initialState = {
  name: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SIGN_USER:
      return {
        name: action.username,
        signedIn: true
      };
    default:
      return state;
  }
}

export default reducer;
