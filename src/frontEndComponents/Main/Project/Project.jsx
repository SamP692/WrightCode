import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { AuthWrapper }      from '../../../frontEndComponents';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <AuthWrapper>
        <div id="projectContainer">
          Welcome to project x
        </div>
      </AuthWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Project);
