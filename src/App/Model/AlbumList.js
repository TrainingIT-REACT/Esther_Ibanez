import React, { Fragment } from 'react';

const AlbumList = ({ albums }) => (
  <ul className="albums">
    {albums.map(album => {
      return (
        <Fragment key={album.id}>
        <li key={album.id} className="border border-secondary">
          <a href="#">
            <img src={album.cover} alt={album.name} className="cover"/> 
            <span className="name">{album.name}</span> 
            <span className="artist">{album.artist}</span>
          </a>
        </li>
        </Fragment>
      );
    })}
  </ul>
);

export default AlbumList;