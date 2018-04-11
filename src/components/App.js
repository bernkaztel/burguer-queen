import React  from 'react';
import  Menu from './Menu.js';
import data from '../Data.js'
import Navbar from './navbar'
import SectionA from './sectionA'
import SectionB from './SectionB'
import Footer from './Footer'
import Order from './order'

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
  const orderS =  this.state.order; 
  orderS[element] = orderS[element] + 1 || 1
  this.setState({order: orderS})
}





render() {
  return(
    <div className="container-fluid">
    <Navbar/>
    <SectionA/>
    <Menu menuState={this.state.menu} order={this.state.order} addToOrder={this.addToOrder}></Menu>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Order/>
    <SectionB/>
    <Footer/>
    </div>
  )
}
}

export default App;
