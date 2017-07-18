export const credentialInputErrors = (credentials) => {
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
