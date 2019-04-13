import React, { Fragment } from 'react';

import Album from './Album';

const AlbumList = ({ albums, history, location, match }) => (
  <div className="card-columns">
    {albums.map(album => {
      return (
        <Fragment key={album.id}>
        <div className="card">
          <Album album={album} 
                 history={history}  
                 location={location}
                 match={match} />
        </div>
        </Fragment>
      );
    })}
  </div>
);

export default AlbumList;