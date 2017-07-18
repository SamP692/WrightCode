import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import { authService }      from '../../services';

import AuthForm             from './AuthForm/AuthForm';

import './Landing.css';

// TODO
// BEFORE REQUEST TO DB
//  Show mismatch errors for signup
// RESPOND TO FAILED LOGIN
//  Handle badly formatted email return from firebase
//  Handle at least 6 character password error from firebase
//  Handle email already in use return from firebase

class Landing extends Component {
  constructor() {
    super();
    this.submitAuth = this.submitAuth.bind(this);
  }

  componentWillMount() {
    const isActiveSession = (res) => {
      const user = {
        userName: res.email,
        userId: res.uid,
      };

      this.props.dispatch({ type: 'UPDATE_SESSION', payload: user });
      this.props.dispatch(push('/dashboard'));
    };

    const noActiveSession = () => {};

    authService.confirmSession(isActiveSession, noActiveSession);
  }

  toggleForm(newFormType) {
    if (this.props.landingUi.activeForm !== newFormType) {
      this.props.dispatch({ type: 'TOGGLE_FORM' });
    }
  }

  submitAuth() {
    const { activeForm, password, confirmPassword, userName } = this.props.landingUi;

    const successfulAuth = (res = null) => {
      const user = {
        userName,
        userId: res.uid,
      };
      this.props.dispatch({ type: 'UPDATE_SESSION', payload: user });
      this.props.dispatch(push('/dashboard'));
    };
    
    const failedAuth = (errors = null) => {
      console.log('%cLogin Failed, Errors: ', 'background-color: red; font-weight: bold');
      console.log(errors);
    };

    authService.authUser(
      { activeForm, password, confirmPassword, userName },
      successfulAuth,
      failedAuth,
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
