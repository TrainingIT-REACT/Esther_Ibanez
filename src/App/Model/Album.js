import React, { Component } from 'react';

class Album extends Component {
    render() {
        return <a href="#" className="d-block p-2 bg-dark text-white">
            <div className="row">
            <div className="col col-sm-1">
                <img src={this.props.album.cover} alt={this.props.album.name} className="cover"/> 
            </div>
            <div className="col col-sm-11">
                <span className="name">{this.props.album.name}</span>
                <br/>
                <span className="artist">{this.props.album.artist}</span>
            </div>
            </div>
        </a>
    }
}

export default Album;