import { defaultUser } from './defaults';

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const userData = {
        userName: action.payload.userName,
        userId: action.payload.userId,
        loggedIn: true,
      };
      return { ...state, ...userData };
    }
    case 'LOGOUT':
      return { ...state, defaultUser };
    default:
      return state;
  }
};

export default user;
