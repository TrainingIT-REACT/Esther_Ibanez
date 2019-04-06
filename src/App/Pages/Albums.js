import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumList from '../Model/AlbumList';

import { getAlbums } from '../actions/server';

class Albums extends Component {
    renderAlbums() {
        const { server } = this.props;
    
        if (server.albumsLoading) {
          return <p>Cargando...</p>
        } else if (server.albumsError) {
          return <p>Hubo un error al obtener los datos :(</p>
        } else {
          return  <AlbumList albums={server.albums} 
                    history={this.props.history}  
                    location={this.props.location} 
                    match={this.props.match} /> 
        }
    }    

    render() {
        return <>
            { this.renderAlbums() }
        </>
    }
}

const mapStateToProps = (state/*, otherProps */) => {
  console.log('albums state', state);
  return {
    ...state
  }
}
  
export default connect(
    mapStateToProps,
    () => ({}),
)(Albums);
