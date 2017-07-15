import React from 'react';
import { object } from 'prop-types';
import { removeFromCache } from '../../helpers/storageUtils';

const Header = (props) => {
  function handleLogout() {
    removeFromCache('authenticatedUser');
    props.logUserOut();
  }

  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      {props.userIsAuthenticated && <button onClick={handleLogout.bind(this)}>Logout</button>}
    </div>
  );
};

export default Header;
