import types from './types';
import { createAsyncAction } from 'redux-promise-middleware-actions';
require('dotenv').config({path: __dirname + '../../../.env'});

const host = process.env.REACT_APP_API_HOST;

export const getSongs = createAsyncAction(types.SONGS, async () => {
  const res = await fetch(host + '/songs')
  return await res.json();
});
