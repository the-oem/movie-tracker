import React, { Component } from 'react';
import { object } from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div className='login'>
        Login
      </div>
    );
  }
}
