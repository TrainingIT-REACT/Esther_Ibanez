import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class Song extends Component {
    constructor(props) {
        super(props);

        this.onSong = this.onSong.bind(this);
    }
    
    onSong(e) {
        e.preventDefault();
        //play
        //this.props.match history location
        //this.props.history.push(`${this.props.match.url}/${this.props.album.id}`);
    }

    render() {
        return <Router>
            <div className="song row">
                <a href="#playsong" onClick={this.onSong}
                   className="d-block p-2 bg-dark text-white col col-sm-10">
                    {/* <img src={this.props.song.cover} alt={this.props.album.name} className="cover"/>  */}
                    <div>
                        <span className="name">{this.props.song.name}</span>
                        <br/>
                        {/* <span className="artist">{this.props.album.artist}</span> */}
                    </div>
                </a>
                <div className="col col-sm-2 d-block p-2 bg-dark text-white">
                    <a  href="#estoquitar" className="album-play">
                        <i className="fas fa-caret-square-right"></i>
                    </a>
                </div>
            </div>
        </Router>    
    }
}

export default Song;