import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { push }             from 'react-router-redux';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import { ProjectsDropdown }  from '../../frontEndComponents';

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
    return (
      <div id="headerContainer">
        <div>
          <Link
            onClick={() => this.toggleNav('dashboard')}
            to="/dashboard"
            className={this.props.headerUi.navSelected === 'dashboard' ? 'selected' : null}
          >
            Dashboard
          </Link>
        </div>
        <div>
          <ProjectsDropdown />
        </div>
        <div id="signOutContainer">
          <button onClick={this.signOut}>
            Sign Out
          </button>
        </div>
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
