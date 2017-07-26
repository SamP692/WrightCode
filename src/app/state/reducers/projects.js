import { defaultProjects } from './defaults';

const projects = (state = defaultProjects, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PROJECT':
      return { ...state, ...action.payload };
    case 'UPDATE_PROJECTS':
      // NEED TO COPY PROJECTS ARRAY, ADD/REMOVE UPDATE SPECIFIC PROJECT, UPDATE STATE W/ NEW ARRAY
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default projects;
