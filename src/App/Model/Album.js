import React, { Component } from 'react';

class Album extends Component {
    render() {
        return <div className="album row">
            <a href="#detallesalbum" className="d-block p-2 bg-dark text-white col col-sm-10">
                <img src={this.props.album.cover} alt={this.props.album.name} className="cover"/> 
                <div>
                    <span className="name">{this.props.album.name}</span>
                    <br/>
                    <span className="artist">{this.props.album.artist}</span>
                </div>
            </a>
            <div className="col col-sm-2 d-block p-2 bg-dark text-white">
                <a href="#reproduciralbum" className="album-play"><i className="fas fa-caret-square-right"></i></a>
            </div>
        </div>
    }
}

export default Album;