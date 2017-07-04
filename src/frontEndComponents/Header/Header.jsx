import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="headerContainer">
        <Link to="/Dashbaord">
          Dashboard
        </Link>
      </div>
    );
  }
}

export default Header;
