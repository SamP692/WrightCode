export default class authService {
  checkForCredentialInputErrors(credentials) {
    const errors = {
      userName: null,
      password: null,
      confirmPassword: null,
    };

    const { activeForm, password, confirmPassword, userName } = this.props.landingUi;
    let isError = false;
    if (!userName) { errors.userName = 'empty'; }
    if (!password) { errors.password = 'empty'; }
    if ()

    if (activeForm === 'signup') {
      const isEmail = () => {
        const hasOneAt = (userName.split('@').length - 1) === 1;
        const characterBeforeAt = userName.indexOf('@') !== 0;
      }
    }

    if (password !== confirmPassword) { console.log('Passwords don\'t match'); }
  }

  static authUser(credentials) {

  }
}
