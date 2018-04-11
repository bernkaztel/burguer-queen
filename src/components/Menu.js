import React, { Component } from 'react';
import MenuItems from './ElementMenu.js'

export default class Menu extends Component {
  constructor() {
    super();
    this.paintFood = this.paintFood.bind(this);
  }
  paintFood(key) {
    const food = this.props.menuState[key];
    return (
      <MenuItems
        addToOrder={this.props.addToOrder}
        src={food.image}
        name={food.name}
        price={food.price}
        status={food.status}
        key={key}
        index={key}
      />
    );
  }
  render() {
    return (
      <div className="menu">
        <h2 className="subtitle">Desayuno</h2>
        {Object.keys(this.props.menuState).map(this.paintFood)}
        <br/>
        <br/>
      </div>
    );
  }
}
 