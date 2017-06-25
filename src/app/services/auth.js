import firebase from '../../firebase.config';

const credentialInputErrors = (credentials) => {
  // NOTE WHAT THIS IS CHECKING FOR
    // Is there a userName
    // Is there a password
    // If user is signing up, is there a confirm password
    // If user is signing up, do passwords match

  // NOTE STILL NEEDS...
    // Validate username as appearing to be an email
      // Probably better to use a tool for this than write it by hand

  const errors = {
    userName: null,
    password: null,
  };

  const { activeForm, password, confirmPassword, userName } = credentials;

  if (!userName) { errors.userName = 'empty'; }
  if (!password) { errors.password = 'empty'; }
  if (activeForm === 'signup' && !confirmPassword) { errors.confirmPassword = 'empty'; }
  if (activeForm === 'signup') {
    errors.confirmPassword = null;
    if (password !== confirmPassword) {
      errors.password = 'mismatch';
      errors.confirmPassword = 'mismatch';
    }
  }

  return errors;
};

export default class authService {
  static authUser(credentials, resolveCallback, rejectCallback) {
    const credentialErrors = credentialInputErrors(credentials);
    let isError = false;
    Object.entries(credentialErrors).forEach((inputElement) => {
      if (inputElement[1] !== null) { isError = true; }
    });
    if (isError) {
      rejectCallback(credentialErrors);
    } else if (credentials.activeForm === 'signup') {
      firebase.auth().createUserWithEmailAndPassword(credentials.userName, credentials.password)
                     .then(res => resolveCallback(res))
                     .catch(err => rejectCallback(err));
    } else if (credentials.activeForm === 'login') {
      firebase.auth().signInWithEmailAndPassword(credentials.userName, credentials.password)
                     .then(res => resolveCallback(res))
                     .catch(err => rejectCallback(err));
    } else {
      rejectCallback('Unknown Error');
    }
  }

  static confirmSession(callback) {
    firebase.auth().onAuthStateChanged(user => callback(user));
  }
}
