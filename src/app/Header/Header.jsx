import React, { Component } from 'react';
// import { Link }             from 'react-router-dom';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div id="header">
        This is the header
      </div>
    );
  }
}

export default Header;
