import React, { Fragment } from 'react';

import Album from './Album';

const AlbumList = ({ albums, history, location, match }) => (
  <ul className="albums">
    {albums.map(album => {
      return (
        <Fragment key={album.id}>
        <li key={album.id} className="border border-secondary">
          <Album album={album} 
                 history={history}  
                 location={location}
                 match={match} />
        </li>
        </Fragment>
      );
    })}
  </ul>
);

export default AlbumList;