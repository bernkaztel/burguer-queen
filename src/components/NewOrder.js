import React, { Component } from 'react';

export default class NewOrder extends Component {
  render() {
    return (
      <tr>
      <th scope="row">2</th>
      <td> {this.props.paintName}</td>
      <td>Extras</td>
      <td>$ {this.props.paintPrice}</td>
      </tr>
    )
  }
}
