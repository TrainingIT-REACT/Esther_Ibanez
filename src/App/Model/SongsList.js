import React, { Fragment } from 'react';

import Song from './Song';

const SongsList = ({ songs, history, location, match }) => (
  <ul className="songs">
    {songs.map(songs => {
      return (
        <Fragment key={songs.id}>
        <li key={songs.id} className="border border-secondary">
          <Song song={songs} 
                 history={history}  
                 location={location}
                 match={match} />
        </li>
        </Fragment>
      );
    })}
  </ul>
);

export default SongsList;