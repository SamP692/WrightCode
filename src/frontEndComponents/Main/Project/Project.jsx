import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import { authService }      from '../../../services';

import './Project.css';

class Project extends Component {
  componentWillMount() {
    const isActiveSession = (res) => {
      const user = {
        userName: res.email,
        userId: res.uid,
      };

      this.props.dispatch({ type: 'UPDATE_SESSION', payload: user });

      // Confirm ownership
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
        Welcome to project x
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Project);
