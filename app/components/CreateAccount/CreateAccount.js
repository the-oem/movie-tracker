import React, { Component } from 'react';
import { object } from 'prop-types';

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className='create-account-container'>
        CreateAccount
      </div>
    );
  }
}
