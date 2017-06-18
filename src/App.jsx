import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing }       from './pages';
import Main              from './app/Main/Main';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
