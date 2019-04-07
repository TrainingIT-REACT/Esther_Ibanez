import types from './types';

export const signUser = (username) => ({
  type: types.SIGN_USER,
  username
});

export const addAlbum = (albumId) => ({
  type: types.ADD_ALBUM,
  albumId
});

export const addSong = (songId) => ({
  type: types.ADD_SONG,
  songId
});