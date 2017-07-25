import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { push }             from 'react-router-redux';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import { ProjectsDropdown } from '../../frontEndComponents';

import { chromeLogger }     from '../../utilities';

import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    chromeLogger({ message: 'Props in Header Component:', data: this.props });
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
      <div>
        <div id="headerBackground">
          <div id="headerContainer">
            <div>
              <Link
                onClick={() => this.toggleNav('dashboard')}
                to="/dashboard"
                className={this.props.router.location.pathname === '/dashboard' ? 'selected' : null}
              >
                Dashboard
              </Link>
            </div>
            <ProjectsDropdown />
            <div id="signOutContainer">
              <button onClick={this.signOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user, headerUi, router } = state;
  return { ...ownProps, user, headerUi, router };
};

export default connect(mapStateToProps)(Header);
