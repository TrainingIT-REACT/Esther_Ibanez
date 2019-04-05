import types from './types';

export const signUser = (username) => ({
  type: types.SIGN_USER,
  username
});
