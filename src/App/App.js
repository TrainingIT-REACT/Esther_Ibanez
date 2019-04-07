import React, { lazy, Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './components/Login/Login';
import Profile from './components/Login/Profile';
import Home from './components/Home/Home';
import Player from './components/Player/Player';
import Loader from './Services/Loader';

import { getAlbums } from './actions/albums';
import { getSongs } from './actions/songs';

// Css
import './App.css';

const AlbumDetail = lazy(() => import('./components/Albums/AlbumDetail'));
const Albums = lazy(() => import('./components/Albums/Albums'));

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
                  {this.props.user.signedIn ? 'Profile' : 'Login'}
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
        
        <main>
            <Player />

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={this.props.user.signedIn ? Profile : Login}/>
              <Route exact path="/albums" component={Loader(Albums)}/>
              <Route path="/albums/:id([0-9]*)" component={Loader(AlbumDetail)}/>
            </Switch>
        </main>
    </div>
    </Router>
  }
}

const mapStateToProps = (state/*, otherProps */) => {
  console.log('app state', state);
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
