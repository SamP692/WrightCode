import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { push }             from 'react-router-redux';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import './Header.css';

class Header extends Component {
  signOut() {
    authService.endSession();
    this.props.dispatch(push('/'));
  }

  render() {
    return (
      <div id="headerContainer">
        <Link onClick={this.signOut} to="/">
          Sign Out
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Header);
