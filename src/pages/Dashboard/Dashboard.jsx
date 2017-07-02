import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Welcome to your dashboard
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Dashboard);
