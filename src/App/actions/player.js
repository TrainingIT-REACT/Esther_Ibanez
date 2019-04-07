import types from './types';

export const playSong = (src) => ({
  type: types.PLAY_SONG,
  src
});