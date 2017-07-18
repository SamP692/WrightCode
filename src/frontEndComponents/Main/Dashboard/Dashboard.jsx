import React, { Component } from 'react';
import { connect }          from 'react-redux';

import './Dashboard.css';

// NOTE
//  Function to redirect to homepage upon signout
//  Needs to be authed route
//  Must update state with empty user

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
