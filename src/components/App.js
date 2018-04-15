import React from "react";
import Menu from "./Menu.js";
import data from "../Data.js";
import Navbar from "./navbar";
import SectionA from "./sectionA";
import Footer from "./Footer";
import Order from "./order";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

class App extends React.Component {
  constructor() {
    super();
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.checkExtras = this.checkExtras.bind(this);
    //colocamos el estado inicial
    this.state = {
      order: {},
      menu: data,
      extras: {
        h1mr: 0,
      h2mp: 0,
      h3mv: 0,
      }
      
    };
  }

  //Función para agregar a la orden
  addToOrder(element) {
    //Dish es el key del producto
    const dish = element;
    //crear copia de la orden previa
    const AddToOrder = this.state.order;
    AddToOrder[dish] = AddToOrder[dish] + 1 || 1;
    this.setState({ order: AddToOrder });
  }

  //Eliminar la orden
  deleteOrder(element) {
    console.log(element);
  }
  //Añadir extras
  checkExtras(extrasamount, index) {
    console.log(extrasamount, index);
    const copyExtras = this.state.extras;
    const beforeValue = copyExtras[index]
    copyExtras[index] = beforeValue + extrasamount;
    this.setState({ extras: copyExtras });
  }

  render() {
    return (
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={SectionA} />
          <Route
            path="/menu"
            exact
            component={() => (
              <Menu
                menuState={this.state.menu}
                order={this.state.order}
                addToOrder={this.addToOrder}
              />
            )}
          />
          <Route
            path="/checkout"
            exact
            component={() => (
              <Order
                menuState={this.state.menu}
                order={this.state.order}
                deleteOrder={this.deleteOrder}
                extras={this.state.extras}
                checkExtras={this.checkExtras}
              />
            )}
          />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
