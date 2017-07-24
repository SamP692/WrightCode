import React, { Component } from 'react';
import { connect }          from 'react-redux';

// import { chromeLogger }     from '../../../utilities';

import './ProjectsDropdown.css';

class ProjectsDropdown extends Component {
  toggleMenuDisplay() {

  }

  render() {
    return (
      <div id="projectsDropdownContainer">
        <button>Projects</button>
        <ul>
          <li>
            Test 1
          </li>
          <li>
            Test 2
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { headerUi, projects } = state;
  return { ...ownProps, headerUi, projects };
};

export default connect(mapStateToProps)(ProjectsDropdown);
