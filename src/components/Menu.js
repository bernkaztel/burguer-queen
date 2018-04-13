import React, { Component } from "react";
import MenuItems from "./ElementMenu.js";
import { Container, Row, Col } from "reactstrap";

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
        description={food.description}
        key={key}
        index={key}
      />
    );
  }
  render() {
    return (
      <Container>
        <Row>
        <h4 className="title d-block mx-auto">
            Cómo ordenar en nuestra website
          </h4>
        </Row>
        <Row>
          <Col>
            <div className="block1">
              <div className="count">1.</div>
              Checa nuestros deliciosos platillos.
              <br />
            </div>
          </Col>
          <Col>
            <div className="block1">
              <div className="count">2.</div>
              ¡Selecciona el que más se te antoje!
              <br />
            </div>
          </Col>
          <Col>
            <div className="block1">
              <div className="count">3.</div>
              Revisa que tu pedido esté bien, agrega los extras que quieras y
              haz el checkout.
              <br />
            </div>
          </Col>
        </Row>
        <h2 className="subtitle">Menú</h2>
        <Container>
          {Object.keys(this.props.menuState).map(this.paintFood)}
        </Container>
      </Container>
    );
  }
}
