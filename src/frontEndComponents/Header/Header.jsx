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

  componentDidMount() {
    console.log(this.props);
  }

  signOut() {
    authService.endSession();
    this.props.dispatch({ type: 'END_SESSION' });
    this.props.dispatch(push('/'));
  }

  toggleNav(navItem) {
    const payload = { navSelected: navItem };
    this.props.dispatch({ type: 'TOGGLE_NAV', payload });
  }

  render() {
    const recordEvent = (event) => {
      console.log('%cEvent Fired: ', 'color: blue; font-weight: bold', event);
    };

    return (
      <div id="headerContainer">
        <Link onClick={() => this.toggleNav('dashboard')} to="/dashboard">
          Dashboard
        </Link>
        <button
          onClick={() => this.toggleNav('projects')}
          onMouseOver={() => recordEvent('Over')}
          onBlur={() => recordEvent('Blur')}
        >
          Projects
        </button>
        <button onClick={this.signOut}>
          Sign Out
        </button>
        <div>{this.props.headerUi.navSelected}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user, headerUi } = state;
  return {
    ...ownProps,
    user,
    headerUi,
  };
};

export default connect(mapStateToProps)(Header);
