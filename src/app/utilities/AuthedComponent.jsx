import { Component }   from 'react';
import { connect }     from 'react-redux';
import { push }        from 'react-router-redux';

import { authService } from '../../services';

class AuthedComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('Authed Component Mounted');

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
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    ...ownProps,
    user,
  };
};

export default connect(mapStateToProps)(AuthedComponent);
