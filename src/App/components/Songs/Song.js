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

    render() {
        return <div className="song row">
                <a href="#playsong" onClick={this.onSong}
                   className="d-block p-2 bg-dark text-white col col-sm-12">
                    <div>
                        <span className="name">{this.props.song.name}</span>
                        <br/>
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
    playSong: (src) => dispatch(playSong(src)),
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Song);