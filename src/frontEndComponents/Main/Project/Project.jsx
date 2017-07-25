import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { AuthWrapper }      from '../../../frontEndComponents';

import './Project.css';

class Project extends Component {
  // componentWillMount() {
  //   Confirm that user owns project
  // }

  render() {
    return (
      <AuthWrapper>
        Welcome to project x
      </AuthWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Project);
