import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Song from './Song';

const SongsList = ({ songs, history, location, match, albums }) => {
  const albumId = match.params.id;

  const renderSong = (song, history, location, match) => {
    return (<Fragment key={song.id}>
    <li key={song.id} className="border border-secondary">
      <Song song={song} 
            history={history}  
            location={location}
            match={match} />
    </li>
    </Fragment>);
  }

  const renderAlbum = (album) => {
    console.log(album);
    return <>
      <img className="cover-big" src={album.cover} alt="album-cover" />
      <p className="name-detail">{album.name}</p>
      <p className="artist-detail">{album.artist}</p>
    </>;
  }

  return <>
    <div className="albumDetail">
        {albums.list.map(album => {
          return album.id == albumId ? renderAlbum(album): '';
        })}
    </div>
    <ul className="songs">
      {songs.list.map(song => {
        return song.album_id == albumId ? renderSong(song, history, location, match): '';
      })}
    </ul>
  </>
  
}

const mapStateToProps = (state/*, otherProps */) => {
  console.log('song state', state);
  return {
    ...state,
  }
}
   
export default connect(
    mapStateToProps,
    () => ({}),
)(SongsList);