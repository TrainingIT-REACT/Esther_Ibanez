import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

class Player extends Component {
    render() {
        return <div className="player">
            <ReactAudioPlayer
                src={this.props.player.src}
                autoPlay
                controls
                />       

        </div>
    }
}


const mapStateToProps = (state/*, otherProps */) => {
    console.log('player state', state);
    return {
        ...state,
    }
}
    
export default connect(
    mapStateToProps,
    () => ({}),
)(Player);