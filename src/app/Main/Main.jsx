import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';

import Header               from '../Header/Header';
import { Dashboard }        from '../../pages';

class Main extends Component {
  componentDidMount() {
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
