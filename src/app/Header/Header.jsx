import React, { Component } from 'react';
// import { Link }             from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  checkState() {
    // console.log(this.store);
  }

  render() {
    return (
      <div className="header">
        This is the header
        {this.checkState()}
        {/* <Link to="" */}
      </div>
    );
  }
}

export default Header;
