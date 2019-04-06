import types from './types';

export const signUser = (username) => ({
  type: types.SIGN_USER,
  username
});


export const addUserAlbum = (album) => ({
  type: types.ADD_USER_ALBUM,
  album
});