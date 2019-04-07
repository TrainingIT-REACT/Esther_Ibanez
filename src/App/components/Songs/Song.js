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
        return <>
                <a href="#playsong" onClick={this.onSong}>
                    {this.props.song.name}                  
                </a>
                <span class="badge badge-secondary badge-pill">{this.renderTime()}</span>
            </>
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