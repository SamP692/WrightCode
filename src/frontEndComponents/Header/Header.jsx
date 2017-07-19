import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { push }             from 'react-router-redux';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    authService.endSession();
    this.props.dispatch({ type: 'END_SESSION' });
    this.props.dispatch(push('/'));
  }

  render() {
    return (
      <div id="headerContainer">
        <Link to="/dashboard">
          Dashboard
        </Link>
        <button onMouseOver={() => this.recordEvent('Over')} onBlur={() => this.recordEvent('Blur')}>
          Projects
        </button>
        <button onClick={this.signOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Header);
