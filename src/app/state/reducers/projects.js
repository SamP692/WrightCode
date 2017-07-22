import { defaultProjects } from './defaults';

const projects = (state = defaultProjects, action) => {
  let newState;
  switch (action.type) {
    case 'NEW_PROJECT': {
      const projectsState = state.slice(0);
      projectsState.push(action.projectData);
      newState = projectsState;
      break;
    }
    case 'DELETE_PROJECT':
      break;
    default:
      newState = state;
  }
  return newState;
};

export default projects;
