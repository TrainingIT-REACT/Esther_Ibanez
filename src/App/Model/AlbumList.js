import React, { Fragment } from 'react';

const AlbumList = ({ albums }) => (
  <ul className="albums">
    {albums.map(album => {
      return (
        <Fragment key={album.id}>
        <li key={album.id} className="border border-secondary">
          <a href="#" className="d-block p-2 bg-dark text-white">
          <div className="row">
            <div className="col col-sm-1">
              <img src={album.cover} alt={album.name} className="cover"/> 
            </div>
            <div className="col col-sm-11">
              <span className="name">{album.name}</span>
              <br/>
              <span className="artist">{album.artist}</span>
            </div>
          </div>
          </a>
        </li>
        </Fragment>
      );
    })}
  </ul>
);

export default AlbumList;