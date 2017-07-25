import React, { Component } from 'react';
import { connect }          from 'react-redux';

// import { chromeLogger }     from '../../../utilities';

import './ProjectsDropdown.css';

class ProjectsDropdown extends Component {
  constructor() {
    super();
    this.toggleMenuDisplay = this.toggleMenuDisplay.bind(this);
  }

  toggleMenuDisplay(type = null) {
    this.props.dispatch({
      type: 'TOGGLE_PROJECTS_DROPDOWN',
      payload: {
        projectsDropdownDisplayed: type === 'blur' ?
          false :
          !this.props.headerUi.projectsDropdownDisplayed,
      },
    });
  }

  render() {
    return (
      <div id="projectsDropdownContainer" onBlur={() => this.toggleMenuDisplay('blur')}>
        <button
          onClick={this.toggleMenuDisplay}
          className={this.props.router.location.pathname === '/project' ? 'selected' : null}
        >
          Projects
        </button>
        <ul id={this.props.headerUi.projectsDropdownDisplayed ? null : 'hidden'}>
          <li id="newProject">
            New Project <span>+</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { headerUi, projects, router } = state;
  return { ...ownProps, headerUi, projects, router };
};

export default connect(mapStateToProps)(ProjectsDropdown);
