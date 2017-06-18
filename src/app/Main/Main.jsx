import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import Header            from '../Header/Header';
import { Dashboard }     from '../../pages';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default Main;
