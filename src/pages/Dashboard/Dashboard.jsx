import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props)
    // console.log(`%cEmail: ${this.props.user.userName}, User ID: ${this.props.user.userId}`);
    const confirmLogin = (res) => {
      const user = {
        userName: res.email,
        userId: res.uid,
      };
      console.log(user);
    };
    authService.confirmSession(confirmLogin);
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
