import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addAlbum } from '../../actions/user';

class Album extends Component {
    constructor(props) {
        super(props);

        this.onAlbum = this.onAlbum.bind(this);
    }
    
    onAlbum(e) {
        e.preventDefault();
        this.props.addAlbum(this.props.album.id);
        this.props.history.push(`${this.props.match.url}/${this.props.album.id}`);
    }

    render() {
        return <>
                <a href={`${this.props.match.url}/${this.props.album.name}`} onClick={this.onAlbum}>
                   <img className="card-img-top" src={this.props.album.cover} alt={this.props.album.name} />
                    <div className="card-body">
                        <p className="card-title name">{this.props.album.name}</p>
                        <p className="card-text artist">{this.props.album.artist}</p>
                    </div>
                    
                </a>
            </>   
    }
}

const mapDispatchToProps = (dispatch) => ({
    addAlbum: (albumId) => dispatch(addAlbum(albumId)),
});
  
export default connect(
    () => ({}),
    mapDispatchToProps,
  )(Album);
  
