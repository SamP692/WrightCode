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

  toggleForm(form) {
    if (this.props.landingUi.activeForm !== form) {
      this.props.dispatch({ type: 'TOGGLE_FORM' });
    }
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
          <button className="submit">
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
