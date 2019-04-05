import React, { lazy, Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from './Pages/Login';
//import Albums from './Routes/Albums';
import Home from './Pages/Home';
import Loader from './Services/Loader';
import UserContext from './contexts/user';

// Css
import './App.css';


const Albums = lazy(() => import('./Pages/Albums'));

class App extends Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);

    this.state = {
      loading: true,
      albums: [],
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
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
                  {this.state.signedIn ? 'Profile' : 'Login'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink>
              </li>
              
            </ul>
            <Route exact path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/albums" component={Loader(Albums)}/>
        </div>
      </UserContext.Provider>
    </Router>
    );
  }
}

export default App;
