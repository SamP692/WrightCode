import React                 from 'react';
import ReactDOM              from 'react-dom';
import { BrowserRouter }     from 'react-router-dom';
import { createStore,
         combineReducers,
         applyMiddleware }   from 'redux';
import { Provider }          from 'react-redux';
import { routerReducer,
         routerMiddleware }  from 'react-router-redux';
import createHistory         from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import reducers              from './app/state/reducers';
import App                   from './App';

import './index.css';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'));

registerServiceWorker();
