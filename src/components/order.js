import React, { Component } from 'react';

export default class order extends Component {
  render() {
    return (
      <div className="order">
        { this.props.children }
      </div>
    )
  }
}
