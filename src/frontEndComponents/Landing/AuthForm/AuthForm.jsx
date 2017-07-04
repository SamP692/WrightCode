import React       from 'react';
import { connect } from 'react-redux';

import './AuthForm.css';

const AuthForm = (props) => {
  const registerInputChange = (property, e) => {
    const landingUi = {};
    landingUi[property] = e.target.value;
    props.dispatch({ type: 'UPDATE_FORM_INPUTS', payload: landingUi });
  };

  const isPasswordField = (type) => {
    const normalizedType = type.toLowerCase();
    return normalizedType.indexOf('password') >= 0;
  };

  return (
    <form id="authFormBody">
      {Object.entries(props.fields).map(fieldEntry => (
        <input
          type={isPasswordField(fieldEntry[0]) ? 'password' : 'text'}
          key={fieldEntry[0]}
          onChange={e => registerInputChange(fieldEntry[0], e)}
          placeholder={fieldEntry[1].placeholder}
        />
      ))}
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { landingUi } = state;
  return {
    ...ownProps,
    landingUi,
  };
};

export default connect(mapStateToProps)(AuthForm);
