import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { signUser } from '../actions/user';

const SignUser = ({ signUser }) => {
  const username = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    signUser(username.current.value);
    username.current.value = '';
  }

  return <form onSubmit={onSubmit}>   
    <div className="form-group">
        <label htmlFor="user">Username</label>
        <input type="text" className="form-control" id="user" placeholder="Username"  ref={username}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password"/>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>        
  </form>
}

const mapDispatchToProps = (dispatch) => ({
    signUser: (username) => dispatch(signUser(username)),
});
  

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SignUser);
