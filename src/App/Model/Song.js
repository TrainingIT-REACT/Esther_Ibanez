import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addSong } from '../actions/user';

class Song extends Component {
    constructor(props) {
        super(props);

        this.onSong = this.onSong.bind(this);
    }
    
    onSong(e) {
        e.preventDefault();
        this.props.addSong(this.props.song.id);
        //play
        //this.props.match history location
        //this.props.history.push(`${this.props.match.url}/${this.props.album.id}`);
    }

    render() {
        return <div className="song row">
                <a href="#playsong" onClick={this.onSong}
                   className="d-block p-2 bg-dark text-white col col-sm-12">
                    {/* <img src={this.props.song.cover} alt={this.props.album.name} className="cover"/>  */}
                    <div>
                        <span className="name">{this.props.song.name}</span>
                        <br/>
                        {/* <span className="artist">{this.props.album.artist}</span> */}
                    </div>
                </a>
            </div>
    }
}

const mapStateToProps = (state/*, otherProps */) => {
  console.log('song state', state);
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
    addSong: (songId) => dispatch(addSong(songId)),
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Song);