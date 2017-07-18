import firebase                  from '../../firebase.config';

import { credentialInputErrors } from './helpers/auth';

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
  static confirmSession(resolveCallback, rejectCallback) {
    firebase.auth().onAuthStateChanged((user) => {
      return user ? resolveCallback(user) : rejectCallback();
    });
  }

  /*
  * Used to sign out a user
  ** undefined is returned by resolved response
  */
  static endSession() {
    firebase.auth().signOut();
  }
}
