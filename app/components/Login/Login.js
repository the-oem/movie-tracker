import React, { Component } from 'react';
import { object } from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  submitAuthentication(e) {
    e.preventDefault();
    this.props.handleAuthentication();
  }

  render() {
    return (
      <div className='login'>
        <form>
          <input type='text' value={this.state.email} placeholder='Email' onChange={(e) => { this.setState({ email: e.target.value }); }}/>
          <input type='text' value={this.state.password} placeholder='Password' onChange={(e) => { this.setState({ password: e.target.value }); }}/>
          <button onClick={this.submitAuthentication.bind(this)}>Login</button>
        </form>
      </div>
    );
  }
}
