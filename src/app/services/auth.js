import firebase from '../../firebase.config';

const credentialInputErrors = (credentials) => {
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
  /*
  * Used for both "lOGIN" and "SIGNUP"
  */
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

  /*
  * Used to confirm an active session
  */
  static confirmSession(callback) {
    firebase.auth().onAuthStateChanged(user => callback(user));
  }
}
