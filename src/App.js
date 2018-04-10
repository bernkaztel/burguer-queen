import React  from 'react';
import  Menu from './Menu.js';
import data from './Data.js'


class App extends React.Component {
  constructor() {
      super();
      this.addToOrder = this.addToOrder.bind(this);
      //colocamos el estado inicial
      this.state = {
      order: {},
      menu: data
  };
}


//Función para agregar a la orden
addToOrder(element){
  //Element es el key del producto
  console.log(element)
  //SelectedItem es el producto seleccionado
  let selectedItem = this.state.menu[element]
  console.log(selectedItem);
}


render() {
  return(
    <Menu menuState={this.state.menu} order={this.state.order} addToOrder={this.addToOrder}></Menu>
  )
}
}

export default App;
