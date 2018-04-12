import React, { Component } from 'react';

export default class NewOrder extends Component {
  render() {
    return (
      <div className="row">
         <div className="grid_4">
          {this.props.paintName}

          </div>
          <div className="grid_4 ">
          <p className="subOrder" >Doble</p>
          <p className="subOrder">Queso</p>
          <p className="subOrder">Huevo</p>
          </div>
          <div className="grid_4 subOrder">
          $ {this.props.paintPrice}
          </div>
      </div>
    )
  }
}
