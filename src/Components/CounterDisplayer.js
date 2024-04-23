import React, { Component } from 'react';

class CounterDisplayer extends Component {
  render() {
    return <h2>Total clicks: {this.props.totCount}</h2>;
  }
}

export default CounterDisplayer;
