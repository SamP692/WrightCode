import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    console.log('%cProps In Landing: ', 'color: grey;, font-weight: bold', this.props);
  }

  render() {
    return (
      <div>
        Landing Page
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { distance } = state;
  return {
    ...ownProps,
    distance,
  };
};

export default connect(mapStateToProps)(Landing);
