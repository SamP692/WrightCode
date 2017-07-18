import React, { Component } from 'react';
import { connect }          from 'react-redux';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <button onClick={this.signout}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Dashboard);
