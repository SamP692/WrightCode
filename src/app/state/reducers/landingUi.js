import { defaultLandingUi } from './defaults';

const landingUi = (state = defaultLandingUi, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM': {
      const activeForm = { activeForm: state.activeForm === 'login' ? 'signup' : 'login' };
      return { ...state, ...activeForm };
    }
    case 'UPDATE_FORM_INPUTS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default landingUi;
