import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { AuthWrapper }      from '../../../frontEndComponents';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    // projectsService.getProjects()
  }

  render() {
    return (
      <AuthWrapper>
        <div id="dashboardContainer">
          Welcome to your dashboard
        </div>
      </AuthWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Dashboard);
