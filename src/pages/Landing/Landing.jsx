import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { authService }      from '../../services';

import AuthForm             from './AuthForm/AuthForm';

import './Landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.submitAuth = this.submitAuth.bind(this);
  }

  componentDidMount() {
    const userInformation = { userName: 'Phred', userId: '12345' };
    this.props.dispatch({ type: 'LOGIN', payload: userInformation });

    // Check Auth against DB
  }

  toggleForm(newFormType) {
    if (this.props.landingUi.activeForm !== newFormType) {
      this.props.dispatch({ type: 'TOGGLE_FORM' });
    }
  }

  submitAuth() {
    // TODO BEFORE REQUEST TO DB
      // Show mismatch errors for signup

    const { activeForm, password, confirmPassword, userName } = this.props.landingUi;
    const successfulLogin = () => {
      console.log('%cSuccess!', 'color: green; font-weight: bold');
    }
    const failedLogin = (errors = null) => {
      // TODO RESPOND TO FAILED LOGIN
        // Handle badly formatted email return from firebase
        // Handle at least 6 character password error from firebase
        // Handle email already in use return from firebase

      console.log('%cLogin Failed, Errors: ', 'background-color: red; font-weight: bold');
      console.log(errors);
    }
    authService.authUser(
      { activeForm, password, confirmPassword, userName },
      successfulLogin,
      failedLogin,
    );
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
        placeholder: 'Confirm Your Password Here...',
      },
    };

    return (
      <div>
        <div id="landingBg" />
        <div id="landingBgOverlay" />
        <div id="authContainer">
          <button
            className={this.props.landingUi.activeForm === 'login' ? 'selected' : null}
            onClick={() => this.toggleForm('login')}
          >
            Login
          </button>
          <button
            className={this.props.landingUi.activeForm === 'signup' ? 'selected' : null}
            onClick={() => this.toggleForm('signup')}
          >
            Signup
          </button>
          <AuthForm fields={this.props.landingUi.activeForm === 'login' ? loginFields : signupFields} />
          <button className="submit" onClick={this.submitAuth}>
            {this.props.landingUi.activeForm === 'login' ? 'Login' : 'Signup'}
          </button>
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
