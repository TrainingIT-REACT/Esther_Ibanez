import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Loader from './Services/Loader';

// Css
import './App.css';

const Albums = lazy(() => import('./Pages/Albums'));

const App = ({ user }) => {
  return (
    <Router>
      <div className="App">
        <h1>Reactify</h1>
        <div>
          <div className="row player border border-secondary ">
            <div className="col">
              <a href="#"><i className="fas fa-angle-left"></i></a>
            </div>
            <div className="col">
              <a href="#"><i className="fas fa-caret-square-right"></i></a>
            </div>
            <div className="col">
              <a href="#"><i className="fas fa-angle-right"></i></a>
            </div>
          </div>
        </div>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink exact className="nav-link active" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">
              {user.signedIn ? 'Profile' : 'Login'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
          </li>
        </ul>

        <Route exact path="/" exact component={Home}/>
        <Route path="/login" component={user.signedIn ? Profile : Login}/>
        <Route path="/albums" component={Loader(Albums)}/>
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
