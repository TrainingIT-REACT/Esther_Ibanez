import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
require('dotenv').config({path: __dirname + '../../../.env'});

const host = process.env.REACT_APP_API_HOST;

class Player extends Component {
    render() {
        return <div className="player">
            <ReactAudioPlayer
                src={host+this.props.player.src}
                autoPlay
                controls
                />       

        </div>
    }
}


const mapStateToProps = (state/*, otherProps */) => {
    return {
        ...state,
    }
}
    
export default connect(
    mapStateToProps,
    () => ({}),
)(Player);