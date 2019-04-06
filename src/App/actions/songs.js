import types from './types';
import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getSongs = createAsyncAction(types.SONGS, async () => {
  const res = await fetch('http://localhost:3001/songs')
  return await res.json();
});
