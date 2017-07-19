import { defaultHeaderUi } from './defaults';

const headerUi = (state = defaultHeaderUi, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default headerUi;
