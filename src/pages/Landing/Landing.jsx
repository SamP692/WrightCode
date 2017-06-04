import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.store = this.props;
  }

  componentDidMount() {
    const userInformation = { userName: 'Phred', userId: '12345' };
    this.store.dispatch({ type: 'LOGIN', payload: userInformation });

    // Check Auth against DB
    console.log(this.store);
  }

  render() {
    return (
      <div id="landingBody">
        <div id="authContainer">{this.props.user.userName}</div>
        <div id="authContainer">{this.props.user.loggedIn ? 'Logged In' : 'Not Logged In'}</div>
      </div>
    );
  }
}

// export default Landing;

const mapStateToProps = (state, ownProps) => {
  const { user, landingUi } = state;
  return {
    ...ownProps,
    user,
    landingUi,
  };
  // return { ...ownProps, state };
};

export default connect(mapStateToProps)(Landing);
