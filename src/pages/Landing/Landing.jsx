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
        <h1>{this.props.user.userName}</h1>
        <h2>{this.props.user.loggedIn ? 'Logged In' : 'Not Logged In'}</h2>
        <div id="authContainer">
          <button onClick={() => this.store.dispatch({ type: 'TOGGLE_FORM' })}>Go to Login</button>
          <button onClick={() => this.store.dispatch({ type: 'TOGGLE_FORM' })}>Go to Signup</button>
          <p>{this.props.landingUi.activeForm === 'login' ? 'Login Form' : 'Signup Form'}</p>
        </div>
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
