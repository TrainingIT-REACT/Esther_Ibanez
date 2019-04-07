import React, {Component} from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    constructor(props) {
        super(props);

        this.onChangeAudio = this.onChangeAudio.bind(this);
        this.play = this.play.bind(this);
    }
    onChangeAudio() {
        console.log('pues cambio');
    }

    play(e) {
        e.preventDefault();
        console.log('play');
    }

    render() {
        return <form>
            <audio id="audio">
                <source src={this.props.player.src} onChange={this.onChangeAudio}/>
            </audio>        

            <div className="row player border border-secondary ">

                <div className="col">
                    <a href="#back"><i className="fas fa-angle-left"></i></a>
                </div>
                <div className="col">
                    <button href="#play" onClick={this.play}><i className="fas fa-caret-square-right"></i></button>
                </div>
                <div className="col">
                    <a href="#forward"><i className="fas fa-angle-right"></i></a>
                </div>
            </div>
        </form>
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