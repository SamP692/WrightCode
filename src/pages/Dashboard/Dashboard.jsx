import React, { Component } from 'react';
import { authService }      from '../../services';

class Dashboard extends Component {
  componentDidMount() {
    const confirmLogin = (res) => { console.log(res); };
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

export default Dashboard;
