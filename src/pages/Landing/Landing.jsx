import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.store = this.props;
  }

  componentDidMount() {
    const userInformation = { name: 'Phred', userId: '12345' };
    this.store.dispatch({ type: 'LOGIN', payload: userInformation });
    console.log(this.props);
    // Check Auth against DB
  }

  render() {
    return (
      <div id="landingBody">
        <div id="authContainer">{this.props.user.name}</div>
      </div>
    );
  }
}

// export default Landing;

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    ...ownProps,
    user,
  };
  // return { ...ownProps, state };
};

export default connect(mapStateToProps)(Landing);
