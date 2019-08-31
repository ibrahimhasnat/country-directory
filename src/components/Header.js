import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='navbar-fixed' style={{ marginBottom: '45px' }}>
      <nav>
        <div className='nav-wrapper light-blue'>
          <Link to='/' className='brand-logo' style={{ marginLeft: '50px' }}>
            <i className='material-icons'>emoji_flags</i> Country Directory
          </Link>
          <ul
            className='right hide-on-med-and-down'
            style={{ marginRight: '50px' }}
          >
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
