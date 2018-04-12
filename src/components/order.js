import React, { Component } from "react";
import NewOrder from './NewOrder'

export default class order extends Component {

  constructor(){
    super();
    this.paintOrder = this.paintOrder.bind(this)
    }

    paintOrder(key){
      const getPrice = this.props.menuState[key].price;
      const getNameFood = this.props.menuState[key].name;
      console.log(key, getPrice, getNameFood);

      return (
        //Adjuntar la key a cada uno de nuestos elementos del array recorrido
        <NewOrder key={key}
        paintPrice={getPrice}
        paintName={getNameFood}
        />

      )
      
    }
  render() {
    //Este está tomando las key de la orden
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      //Este nos está devolviendo el platillo
      const dish= this.props.menuState[key];
      //Este nos está devolviendo cuántos veces pedimos el platillo
      const count = this.props.order[key];
       return prevTotal + (count * dish.price)
    }, 0)
    console.log(total);
  
    return (
      <div className="order">
        <h2 className="subtitle">Revisa tu orden</h2>
        <div className="row white">
        <div className="grid_1">
          </div>
          <div className="grid_4 subtitle">
          Producto
          </div>
          <div className="grid_4 subtitle">
          Extras
          </div>
          <div className="grid_4 subtitle">
          Precio
          </div>
          </div>
           { orderIds.map(this.paintOrder)} 
           <div>
             <h3>{total}</h3>
           </div>
           </div>
    )}}
