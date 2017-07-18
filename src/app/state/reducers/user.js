import { defaultUser } from './defaults';

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'UPDATE_SESSION': {
      const userData = {
        userName: action.payload.userName,
        userId: action.payload.userId,
        loggedIn: true,
      };
      return { ...state, ...userData };
    }
    case 'END_SESSION':
      return { ...state, defaultUser };
    default:
      return state;
  }
};

export default user;
