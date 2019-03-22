import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from './Routes/Login';
import Albums from './Routes/Albums';
import Home from './Routes/Home';

// Css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Reactify</h1>
          <div>
            <div className="row player border border-secondary ">
              <div className="col">
                <a href="#"><i class="fas fa-angle-left"></i></a>
              </div>
              <div className="col">
                <a href="#"><i class="fas fa-caret-square-right"></i></a>
              </div>
              <div className="col">
                <a href="#"><i class="fas fa-angle-right"></i></a>
              </div>
            </div>
            
          </div>

          <ul class="nav justify-content-center">
            <li class="nav-item">
              <NavLink exact className="nav-link active" activeClassName="active" to="/">Inicio</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
            </li>
            
          </ul>
          <Route exact path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/albums" component={Albums}/>
      </div>
    </Router>
      
      
    );
  }
}

export default App;
