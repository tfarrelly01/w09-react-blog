import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <div>
    <h2>Nav Bar</h2>
    <nav>
        <Link to="/">Home Page    </Link>
        <Link to="/post">Post Page    </Link>
        <Link to="/author">Author Page</Link>
    </nav>

  </div>
);

export default NavBar;