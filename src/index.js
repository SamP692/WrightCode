import React                           from 'react';
import ReactDOM                        from 'react-dom';
import { createStore,
         applyMiddleware,
         compose }                     from 'redux';
import { Provider }                    from 'react-redux';
import { ConnectedRouter,
         routerMiddleware }            from 'react-router-redux';
import createHistory                   from 'history/createBrowserHistory';

import registerServiceWorker           from './registerServiceWorker';

import reducers                        from './app/state/reducers';
import App                             from './App';

import './index.css';

const history = createHistory();
let middleware = applyMiddleware(routerMiddleware(history));
if (window.devToolsExtension) { middleware = compose(middleware, window.devToolsExtension()); }

const store = createStore(reducers, middleware);
console.log('%cINITIAL STORE: ', 'color: blue; font-weight: bold', store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
