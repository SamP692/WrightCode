import { defaultLandingUi } from './defaults';

const landingUi = (state = defaultLandingUi, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return Object.assign(...state, { activeForm: state.activeForm === 'login' ? 'signup' : 'login' });
    case 'UPDATE_FORM_INPUTS':
      console.log('%cNew State... ', 'color: green; font-weight: bold', Object.assign(...state, action.payload));
      return Object.assign(...state, action.payload);
    default:
      return state;
  }
};

export default landingUi;
