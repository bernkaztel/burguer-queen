import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

export default class ElementMenu extends Component {
  render() {
    return (
      <Col sm="6" md="4" className="d-inline-block  mb-2">
        <Card className="border-pnk">
          <CardImg top width="100%" className="imgcard" src={this.props.src} alt="Card image cap" />
          <CardBody>
            <CardTitle className="text-center titleproduct">{this.props.name}</CardTitle>
            <CardSubtitle className="text-center priceproduct">$ {this.props.price}</CardSubtitle>
            <CardText className="text-center descriptionproduct">
            {this.props.description}
            </CardText>
            <Button
              className="pink-btn d-block mx-auto"
              onClick={() => this.props.addToOrder(this.props.index)}
            >
              Añadir al carrito
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
