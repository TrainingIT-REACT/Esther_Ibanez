import React from 'react';
import { connect } from 'react-redux';
import SongsList from '../Model/SongsList';

const AlbumDetail = ({server, history, location, match}) => {
  if (server.isLoading) {
    return <p>Cargando...</p>
  } else if (server.error) {
    return <p>Hubo un error al obtener los datos :(</p>
  } else {
    return  <SongsList songs={server.songs} 
                       history={history}  
                       location={location} 
                       match={match} /> 
  }   
}

const mapStateToProps = (state/*, otherProps */) => {
    console.log(state);
    return {
      ...state
    }
  }
  
export default connect(
    mapStateToProps,
    () => ({})
)(AlbumDetail);
