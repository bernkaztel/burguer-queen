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
      <div className="howto">
            <h2 className="title grid_12">Cómo ordenar en nuestra website</h2>
          </div>
          <div className="row">
          <div className="grid_4">
            <div className="block1">
              <div className="count">1.</div>
              Checa nuestros deliciosos platillos.
              <br/>
            </div>
          </div>
          <div className="grid_4">
            <div className="block1">
              <div className="count">2.</div>
              ¡Selecciona el que más se te antoje!
              <br/>
            </div>
          </div>
          <div className="grid_4">
            <div className="block1">
              <div className="count">3.</div>
              Revisa que tu pedido esté bien, agrega los extras que quieras y haz el checkout.
              <br/>
            </div>
          </div>
          </div>
        <h2 className="subtitle">Desayuno</h2>
        {Object.keys(this.props.menuState).map(this.paintFood)}
      </div>
    );
  }
}
 