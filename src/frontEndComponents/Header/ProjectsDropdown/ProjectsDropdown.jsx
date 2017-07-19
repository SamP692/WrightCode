import React, { Component } from 'react';
import { connect }          from 'react-redux';

import '../Header.css';

class ProjectsDropdown extends Component {
  toggleNav(navItem) {
    const payload = { navSelected: navItem };
    this.props.dispatch({ type: 'TOGGLE_NAV', payload });
  }

  render() {
    const recordEvent = (event) => {
      console.log('%cEvent Fired: ', 'color: blue; font-weight: bold', event);
    };

    return (
      <button
        onClick={() => this.toggleNav('projects')}
        onMouseOver={() => recordEvent('Over')}
        onBlur={() => recordEvent('Blur')}
      >
        Projects
      </button>
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

export default connect(mapStateToProps)(ProjectsDropdown);
