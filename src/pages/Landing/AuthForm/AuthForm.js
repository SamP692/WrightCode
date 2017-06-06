import React from 'react';
import { connect } from 'react-redux';

import './AuthForm.css';

const AuthForm = (props) => {
  const registerInputChange = (property, e) => {
    const landingUi = {};
    landingUi[property] = e.target.value;
    props.dispatch({ type: 'UPDATE_FORM_INPUTS', payload: landingUi });
  };

  return (
    <div id="authFormBody">
      {Object.entries(props.fields).map(fieldEntry => (
        <input
          type={fieldEntry[0].toLowerCase().indexOf('password') ? 'password' : 'text'}
          key={fieldEntry[0]}
          onChange={e => registerInputChange(fieldEntry[0], e)}
          placeholder={fieldEntry[1].placeholder}
        />
      ))}
    </div>
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
