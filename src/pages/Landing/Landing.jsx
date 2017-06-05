import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm/AuthForm';

import './Landing.css';

class Landing extends Component {
  componentDidMount() {
    const userInformation = { userName: 'Phred', userId: '12345' };
    this.props.dispatch({ type: 'LOGIN', payload: userInformation });

    // Check Auth against DB
  }

  render() {
    const loginFields = {
      userName: {
        label: 'User Name',
        placeholder: 'Your Username Here...',
      },
      password: {
        label: 'Password',
        placeholder: 'Your Password Here...',
      },
    };
    const signupFields = {
      ...loginFields,
      confirmPassword: {
        label: 'Password',
        placeholder: 'Confirm Password...',
      },
    };

    return (
      <div id="landingBody">
        <h1>{this.props.user.userName}</h1>
        <h2>{this.props.user.loggedIn ? 'Logged In' : 'Not Logged In'}</h2>
        <div id="authContainer">
          <button onClick={() => this.props.dispatch({ type: 'TOGGLE_FORM' })}>Go to Login</button>
          <button onClick={() => this.props.dispatch({ type: 'TOGGLE_FORM' })}>Go to Signup</button>
          <p>{this.props.landingUi.activeForm === 'login' ? 'Login Form' : 'Signup Form'}</p>
          <AuthForm fields={this.props.landingUi.activeForm === 'login' ? loginFields : signupFields} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user, landingUi } = state;
  return {
    ...ownProps,
    user,
    landingUi,
  };
};

export default connect(mapStateToProps)(Landing);
