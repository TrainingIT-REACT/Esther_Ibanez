import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addSong } from '../../actions/user';
import { playSong } from '../../actions/player';

class Song extends Component {
    constructor(props) {
        super(props);
        this.onSong = this.onSong.bind(this);
    }
    
    onSong(e) {
        e.preventDefault();
        this.props.addSong(this.props.song.id);
        this.props.playSong(this.props.song.audio);
    }

    renderTime() {
        const minutes = Math.floor(this.props.song.seconds/60);
        const seconds = this.props.song.seconds - minutes * 60;
        return <>{minutes}:{seconds}</>;
    }

    render() {
        return <div className="song row">
                <a href="#playsong" onClick={this.onSong}
                   className="d-block p-2 bg-dark text-white col col-sm-12  d-flex justify-content-between">
                    <span className="name">{this.props.song.name}</span>
                    <span className="time">{this.renderTime()}</span>
                   
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
    playSong: (src) => dispatch(playSong(src)),
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Song);