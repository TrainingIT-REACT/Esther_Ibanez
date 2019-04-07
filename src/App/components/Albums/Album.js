import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

import { addAlbum } from '../../actions/user';

class Album extends Component {
    constructor(props) {
        super(props);

        this.onAlbum = this.onAlbum.bind(this);
        this.onPlayAlbum = this.onPlayAlbum.bind(this);
    }
    
    onAlbum(e) {
        e.preventDefault();
        this.props.addAlbum(this.props.album.id);
        this.props.history.push(`${this.props.match.url}/${this.props.album.id}`);
    }

    onPlayAlbum(e) {
        e.preventDefault();
        console.log('play ', this.props.album.id);
    }

    render() {
        return <>
                <a href={`${this.props.match.url}/${this.props.album.name}`} onClick={this.onAlbum}>
                   <img className="card-img-top" src={this.props.album.cover} alt={this.props.album.name} />
                    <div class="card-body">
                        <h5 class="card-title name">{this.props.album.name}</h5>
                        <p class="card-text artist">{this.props.album.artist}</p>
                    </div>
                    {/* <img src={this.props.album.cover} alt={this.props.album.name} className="cover"/> 
                    <div>
                        <span className="name">{this.props.album.name}</span>
                        <br/>
                        <span className="artist">{this.props.album.artist}</span>
                    </div> */}
                </a>
                {/* <div className="col col-sm-2 d-block p-2 bg-dark text-white">
                    <a  href={`${this.props.match.url}/${this.props.album.name}/play`} onClick={this.onPlayAlbum} className="album-play">
                        <i className="fas fa-caret-square-right"></i>
                    </a>
                </div> */}
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
  