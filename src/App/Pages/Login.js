import React, { Component } from 'react';

import UserContext from '../contexts/user';
import Profile from './Profile';

class Login extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
            return <div>
                { signedIn ? (
                    <Profile />
                ) : (
                <>
                    { (this.props.location.state && this.props.location.state.message) &&
                    <p>
                        { this.props.location.state.message }
                    </p>
                    }
                    
                    <form>
                        <div className="form-group">
                            <label for="user">Username</label>
                            <input type="text" className="form-control" id="user" placeholder="Username"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
    
                        <button type="submit" className="btn btn-primary"  onClick={() => updateUser(true)}>
                        Login
                        </button>
                    </form>
            
                </>
                )}
            </div>
            }}
      </UserContext.Consumer>;
    }
  }

export default Login;