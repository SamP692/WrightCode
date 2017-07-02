import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import Header               from '../Header/Header';
import { Dashboard }        from '../../pages';

import { authService }      from '../../services';

class Main extends Component {
  componentDidMount() {
    const confirmLogin = (res) => {
      if (res) {
        const user = {
          userName: res.email,
          userId: res.uid,
        };

        this.props.dispatch({ type: 'LOGIN', payload: user });
      } else {
        this.props.dispatch(push('/'));
      }
    };

    authService.confirmSession(confirmLogin);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return { ...ownProps, user };
};

export default connect(mapStateToProps)(Main);
