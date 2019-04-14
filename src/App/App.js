import React, { lazy, Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Player from './components/Player/Player';
import AppRouter from './AppRouter';

import { getAlbums } from './actions/albums';
import { getSongs } from './actions/songs';

// Css
import './App.css';
require('dotenv').config({path: __dirname + '../../.env'});

class App extends Component {
  async componentDidMount() {
    this.props.getAlbums();
    this.props.getSongs();
  }

  render() {
    return  <Router>
      <div className="App">
        <div className="row">
          <div className="col col-sm-1"><h1>Reactify</h1></div>
          <nav className="col co-sm-11">
            <ul className="nav justify-content-around">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                  {this.props.user.signedIn ? this.props.user.name : 'Login'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
        <div>
            <Player />

            <AppRouter user={this.props.user} />
        </div>
    </div>
    </Router>
  }
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
  getAlbums: () => dispatch(getAlbums()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
