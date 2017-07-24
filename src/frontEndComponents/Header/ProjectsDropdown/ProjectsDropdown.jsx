import React, { Component } from 'react';
import { connect }          from 'react-redux';

// import { chromeLogger }     from '../../../utilities';

import './ProjectsDropdown.css';

class ProjectsDropdown extends Component {
  toggleMenuDisplay() {

  }

  render() {
    return (
      <div id="projectsDropdownContainer" onBlur={this.toggleMenuDisplay}>
        <button onClick={this.toggleMenuDisplay}>Projects</button>
        <ul id={this.props.headerUi.projectsDropdownDisplayed ? null : 'hidden'}>
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
