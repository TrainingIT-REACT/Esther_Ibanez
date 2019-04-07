import React, { Fragment } from 'react';

import Song from './Song';

const SongsList = ({ songs, history, location, match }) => (
  <ul className="songs">
    {songs.map(song => {
      return song.album_id == match.params.id ?
        (
          <Fragment key={song.id}>
          <li key={song.id} className="border border-secondary">
            <Song song={song} 
                  history={history}  
                  location={location}
                  match={match} />
          </li>
          </Fragment>
        )
      : '';
    })}
  </ul>
);

export default SongsList;