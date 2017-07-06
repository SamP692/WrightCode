import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, Main } from './frontEndComponents';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/admin" />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
