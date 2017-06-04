import { defaultUser } from './defaults';

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign(...state, {
        userName: action.payload.userName,
        userId: action.payload.userId,
        loggedIn: true, 
      });
    case 'LOGOUT':
      return Object.assign(...state, { defaultUser });
    default:
      return state;
  }
};

export default user;
