import React, {Component, Fragment} from 'react';
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
        return <Fragment key={this.props.song.id}>
            <li key={this.props.song.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div role="button" onClick={this.onSong}>
                    {this.props.song.name}                  
                </div>
                <span className="badge badge-secondary badge-pill">{this.renderTime()}</span>
            </li>
        </Fragment>
    }
}

const mapStateToProps = (state/*, otherProps */) => {
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