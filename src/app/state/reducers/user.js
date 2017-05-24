import { defaultUser } from './defaults';

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign(...state, { name: action.payload.name, userId: action.payload.userId });
    case 'LOGOUT':
      return Object.assign(...state, { defaultUser });
    default:
      return state;
  }
};

export default user;
