import React, { Fragment } from 'react';

import Album from './Album';

const AlbumList = ({ albums }) => (
  <ul className="albums">
    {albums.map(album => {
      return (
        <Fragment key={album.id}>
        <li key={album.id} className="border border-secondary">
          <Album album={album} />
        </li>
        </Fragment>
      );
    })}
  </ul>
);

export default AlbumList;