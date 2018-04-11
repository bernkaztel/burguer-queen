import React, { Component } from 'react';

export default class ElementMenu extends Component {
  render() {
    return (
      <div className="grid_3">
      <div className="banner">
        <div className="gall_block">
          <img className="card-img" src={this.props.src} alt="" />
          <div className="bann_capt2 ">
            <div className="maxheight">
              <div className="bann_title">{this.props.name}</div>
              <div className="bann_title2">${this.props.price}</div>
              <div className="counters">
              <button className="pink-btn" onClick={ () => this.props.addToOrder(this.props.index)} >Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


