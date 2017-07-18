import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import { authService }      from '../../../services';

import './Dashboard.css';

class Dashboard extends Component {
  componentWillMount() {
    const isActiveSession = (res) => {
      const user = {
        userName: res.email,
        userId: res.uid,
      };

      this.props.dispatch({ type: 'UPDATE_SESSION', payload: user });
      this.props.dispatch(push('/dashboard'));
    };

    const noActiveSession = () => {
      this.props.dispatch({ type: 'END_SESSION' });
      this.props.dispatch(push('/'));
    };

    authService.confirmSession(isActiveSession, noActiveSession);
  }

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
