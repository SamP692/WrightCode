import React                 from 'react';
import { Switch, Route }     from 'react-router-dom';

import { Dashboard, Header } from '../../frontEndComponents';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default Main;
