import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard,
         Header,
         Project }       from '../../frontEndComponents';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/project" component={Project} />
    </Switch>
  </div>
);

export default Main;
