import React from 'react';
import { object } from 'prop-types';
import { removeFromCache } from '../../helpers/storageUtils';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  function handleLogout() {
    removeFromCache('authenticatedUser');
    props.logUserOut();
  }

  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      {props.userIsAuthenticated ?
        <button className='header-btn' onClick={handleLogout.bind(this)}>Logout</button> :
        <NavLink exact activeClassName="selected" to='/login'>
          <button className='header-btn'>Login</button>
        </NavLink>
      }
    </div>
  );
};

export default Header;
