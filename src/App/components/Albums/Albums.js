import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumList from './AlbumList';

class Albums extends Component {
    renderAlbums() {
        const { albums } = this.props;
    
        if (albums.isLoading) {
          return <p>Cargando...</p>
        } else if (albums.hasError) {
          return <p>Hubo un error al obtener los datos :(</p>
        } else {
          return  <AlbumList albums={albums.list} 
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
