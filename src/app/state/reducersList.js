import { routerReducer as router } from 'react-router-redux';

import user      from './reducers/user';
import projects  from './reducers/projects';
import landingUi from './reducers/landingUi';
import headerUi  from './reducers/headerUi';

export {
  router,
  user,
  projects,
  landingUi,
  headerUi,
};
