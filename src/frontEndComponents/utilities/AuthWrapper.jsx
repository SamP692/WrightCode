import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import { authService }      from '../../services';

// import { chromeLogger }     from '../../utilities';

class AuthWrapper extends Component {
  componentWillMount() {
    const noActiveSession = () => {
      this.props.dispatch({ type: 'LOGOUT' });
      this.props.dispatch(push('/'));
    };

    const isActiveSession = (res) => {
      const user = {
        userName: res.email,
        userId: res.uid,
      };

      this.props.dispatch({ type: 'LOGIN', payload: user });
      this.props.dispatch(push('/dashboard'));
    };

    authService.confirmSession(isActiveSession, noActiveSession);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    ...ownProps,
    user,
  };
};

export default connect(mapStateToProps)(AuthWrapper);
