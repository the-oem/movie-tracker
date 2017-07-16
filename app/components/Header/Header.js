import React from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';
import { removeFromCache } from '../../helpers/storageUtils';

const Header = (props) => {
  function handleLogout() {
    removeFromCache('authenticatedUser');
    props.logUserOut();
  }

  let headerBtns = '';
  switch (props.location.pathname) {
    case '/':
      headerBtns = props.userIsAuthenticated ?
        <div className='header-btn-container'>
          <NavLink exact activeClassName='selected' to='/favorites'>
            <button className='header-btn'>Favorites</button>
          </NavLink>
          <button className='header-btn' onClick={handleLogout.bind(this)}>Logout</button>
        </div> :
        <div className='header-btn-container'>
          <NavLink exact activeClassName='selected' to='/create-account'>
            <button className='header-btn header-create-acct'>Create Account</button>
          </NavLink>
          <NavLink exact activeClassName='selected' to='/login'>
            <button className='header-btn header-login'>Login</button>
          </NavLink>
        </div>;
      break;
    default:
      headerBtns = <div className='header-btn-container'>
        <NavLink exact activeClassName='selected' to='/'>
          <button className='header-btn'>Home</button>
        </NavLink>
      </div>;
  }

  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      {headerBtns}
    </div>
  );
};

export default Header;
