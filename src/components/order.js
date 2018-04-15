import React, { Component } from "react";
import NewOrder from './NewOrder'
import { Container, Row } from 'reactstrap';
import { Table } from 'reactstrap';

export default class order extends Component {

  constructor(){
    super();
    this.paintOrder = this.paintOrder.bind(this)
    }

    paintOrder(key){
      const getPrice = this.props.menuState[key].price;
      const getNameFood = this.props.menuState[key].name;
       //Este nos está devolviendo cuántos veces pedimos el platillo
       const count = this.props.order[key];
       const subtotal = count * getPrice

      return (
        //Adjuntar la key a cada uno de nuestos elementos del array recorrido
        <NewOrder key={key}
        index={key}
        paintPrice={subtotal}
        paintName={getNameFood}
        quantity={count}
        extras={this.props.extras}
        checkExtras={this.props.checkExtras}
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
      if(key === 'h1mr' || key === 'h2mp' || key === 'h3mv' ){ 
        const newExtras = this.props.extras[key]
        return prevTotal + newExtras + (count * dish.price) 
      }
       return prevTotal  + (count * dish.price) 
    }, 0)

  
    return (
      <Container>
        <h2 className="subtitle">Revisa tu orden</h2>
        <Row>
        <Table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Extras</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
           { orderIds.map(this.paintOrder)} 
           <tr>
            <th></th>
            <th></th>
            <th>Precio total:</th>
            <th className="bigger-font">{total}</th>
          </tr>
           </tbody>
      </Table>
           </Row>
           </Container>
    )}}
