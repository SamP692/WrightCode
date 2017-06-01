import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Dashboard,
  NotAuthed,
  Landing }              from '../pages';

const Main = () => (
  <Switch>
    <Route path="/dashboard/:id" component={Dashboard} />
    <Route exact path="/dashboard/" component={NotAuthed} />
    <Route exact path="/" component={Landing} />
  </Switch>
);

export default Main;
