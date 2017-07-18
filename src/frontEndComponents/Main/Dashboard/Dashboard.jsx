import React               from 'react';
import { connect }         from 'react-redux';

import { AuthedComponent } from '../../../utilities';

import './Dashboard.css';

class Dashboard extends AuthedComponent {
  render() {
    return (
      <div>
        Hi, this is an Authed Component
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Dashboard);
