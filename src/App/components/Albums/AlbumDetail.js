import React from 'react';
import { connect } from 'react-redux';
import SongsList from '../Songs/SongsList';

const AlbumDetail = ({songs, history, location, match}) => {
  if (songs.isLoading) {
    return <p>Cargando...</p>
  } else if (songs.hasError) {
    return <p>Hubo un error al obtener los datos :(</p>
  } else {
    return  <SongsList history={history}  
                       location={location} 
                       match={match} /> 
  }   
}

const mapStateToProps = (state/*, otherProps */) => {
    return {
      ...state
    }
  }
  
export default connect(
    mapStateToProps,
    () => ({})
)(AlbumDetail);
