import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderUser() {
    console.log(this.props.store);
    // const state = this.store.getState();
    // const bodyText = state.loggedIn ? <h1>{state.userName} has the ID {state.userId}</h1> : 'Please Login';
    // return <h1>{bodyText}</h1>;
  }

  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

export default Landing;
