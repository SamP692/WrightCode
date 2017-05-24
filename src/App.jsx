import React  from 'react';

import Header from './app/Header/Header';
import Main   from './app/Main/Main';

const App = props => (
  <div>
    <Header store={props} />
    <Main store={props} />
  </div>
);

export default App;
