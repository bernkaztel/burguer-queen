import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {  Row } from 'reactstrap';

export default class NewOrder extends Component {

  render() {
    if(this.props.index === 'h1mr' || this.props.index === 'h2mp' ||this.props.index === 'h3mv'){
      return (
        <tr>
        <th scope="row">{this.props.quantity}  {/*Aquí va a cantidad de productos*/}</th>
        <td> {this.props.paintName}</td>
        <td>
        <Row>
        <Button className="sm-btn" block onClick={() => this.props.checkExtras(this.props.quantity*5, this.props.index)}>Hacer doble + $<span>{this.props.quantity *5}</span></Button>
        </Row>
        <Row>
        <Button className="sm-btn" block onClick={() => this.props.checkExtras(this.props.quantity*1, this.props.index)}>Agregar queso  + $<span>{this.props.quantity *1}</span></Button>
        </Row>
        <Row>
        <Button className="sm-btn" block onClick={() => this.props.checkExtras(this.props.quantity*1, this.props.index)}>Agregar huevo  + $<span>{this.props.quantity *1}</span></Button>
        </Row>
          </td>
        <td className="final-price" >$ {this.props.paintPrice + this.props.extras[this.props.index]}</td>
        </tr>
      )
    }
    else {
    return (
      <tr>
        
      <th scope="row">{this.props.quantity}     {/*Aquí va a cantidad de productos*/} </th>
      <td> {this.props.paintName}</td>
      <td></td>
      <td>$ {this.props.paintPrice}</td>
      </tr>
    )
  }
  }
}
