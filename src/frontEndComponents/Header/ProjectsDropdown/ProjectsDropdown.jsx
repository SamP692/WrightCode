import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { chromeLogger }     from '../../../utilities';

class ProjectsDropdown extends Component {
  componentDidMount() {
    chromeLogger({ message: 'Stuff' });
  }

  toggleNav(navItem) {
    const payload = { navSelected: navItem };
    this.props.dispatch({ type: 'TOGGLE_NAV', payload });
  }

  render() {
    const recordEvent = event => chromeLogger({ message: 'Event', data: event });

    return (
      <button
        onClick={() => this.toggleNav('projects')}
        onMouseOver={() => recordEvent('Over')}
        onBlur={() => recordEvent('Blur')}
        className={this.props.headerUi.navSelected === 'projects' ? 'selected' : null}
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
