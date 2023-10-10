// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="head">
      <div className="logo">
        {/* Replace 'logo-url' with the actual URL or path to your logo image */}
        <img src="logo-url" alt="Shopping Logo" />
      </div>
      <ul className="link">
        <li>
          <Link to="/" className="atext">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="atext">
            Products
          </Link>
        </li>
        <li>
          <Link to="/login" className="atext">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signin" className="atext">
            Sign In
          </Link>
        </li>
        
      </ul>
    </header>
  );
};

export default Header;
