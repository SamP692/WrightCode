import React, { Component } from 'react';
import { connect } from 'react-redux';

import authService from '../../services';

import AuthForm from './AuthForm/AuthForm';

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
    const { activeForm, password, confirmPassword, userName } = this.props.landingUi;

    // SHARED SITUATIONS BEFORE REQUEST TO DB
      // Email is blank
      // Password is blank

    // SIGNUP SITUATIONS BEFORE REQUEST TO DB
      // Email is not an email
      // Password is not at least 6 characters
      // Password and confirm password don't match
      // Email is good, password are good
      // *All should be checked -- as in if there are multiple errors, all should show
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
