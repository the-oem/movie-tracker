import React, { Component } from 'react';
import { object } from 'prop-types';
import { getFromCache } from '../../helpers/storageUtils';
import { Link, NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: 'tman2272@aol.com',
      password: 'password',
      authStatus: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  submitAuthentication(e) {
    e.preventDefault();
    this.props.handleAuthentication(this.state);
    this.setState({
      email: 'tman2272@aol.com',
      password: 'password',
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/create-account');
  }

  render() {
    const errorMessage = (!this.props.userIsAuthenticated && this.props.userAuthenticationFailure === 'User not found.') ? 'Authentication Failure' : '';
    return (
      <div className='login'>
        <form>
          <input type='text' value={this.state.email} placeholder='Email' className="email-input" onChange={(e) => { this.setState({ email: e.target.value }); }}/>
          <input type='text' value={this.state.password} placeholder='Password' className="password-input" onChange={(e) => { this.setState({ password: e.target.value }); }}/>
          <button className="submit-btn" onClick={this.submitAuthentication.bind(this)}>Login</button>
        </form>
        <h1>{errorMessage}</h1>
        <button onClick={this.handleClick}>Create Account</button>
      </div>
    );
  }
}
