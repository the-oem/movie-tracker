import React, { Component } from 'react';
import { object } from 'prop-types';
import { getFromCache } from '../../helpers/storageUtils';


export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: 'tman2272@aol.com',
      password: 'password',
      authStatus: '',
    };
  }

  componentDidMount() {

  }

  submitAuthentication(e) {
    e.preventDefault();
    this.props.handleAuthentication(this.state);
    this.setState({
      email: 'tman2272@aol.com',
      password: 'password',
    });
  }

  render() {
    const errorMessage = (!this.props.userIsAuthenticated && this.props.userAuthenticationFailure === 'User not found.') ? 'Authentication Failure' : '';
    return (
      <div className='login'>
        <form>
          <input type='text' value={this.state.email} placeholder='Email' className="email-input" onChange={(e) => { this.setState({ email: e.target.value }); }}/>
          <input type='text' value={this.state.password} placeholder='Password' className="password-input" onChange={(e) => { this.setState({ password: e.target.value }); }}/>
          <button onClick={this.submitAuthentication.bind(this)}>Login</button>
        </form>
        <h1>{errorMessage}</h1>
      </div>
    );
  }
}
