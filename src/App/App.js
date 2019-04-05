import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Loader from './Services/Loader';

// Css
import './App.css';

const AlbumDetail = lazy(() => import('./Pages/AlbumDetail'));
const Albums = lazy(() => import('./Pages/Albums'));

const App = ({ user }) => {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="col col-sm-1"><h1>Reactify</h1></div>
          <div className="col co-sm-11">
            <ul className="nav justify-content-around">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                  {user.signedIn ? 'Profile' : 'Login'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link active" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="row player border border-secondary ">
            <div className="col">
              <a href="#back"><i className="fas fa-angle-left"></i></a>
            </div>
            <div className="col">
              <a href="#play"><i className="fas fa-caret-square-right"></i></a>
            </div>
            <div className="col">
              <a href="#forward"><i className="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>

        

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={user.signedIn ? Profile : Login}/>
          <Route exact path="/albums" component={Loader(Albums)}/>
          <Route path="/albums/:id([0-9]*)" component={Loader(AlbumDetail)}/>
        </Switch>
    </div>
  </Router>
  );
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    user: {
      name: state.user.name,
      signedIn: state.user.signedIn
    }
  }
}

export default connect(
  mapStateToProps,
  () => ({})
)(App);
