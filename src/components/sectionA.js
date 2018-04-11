import React, { Component } from 'react';

export default class sectionA extends Component {
  render() {
    return (
      <section className="content">
      <div className="container">
        <div className="row">
          <div className="grid_4">
            <div className="banner">
              <div className="gall_block">
                <img src="../images/h1.jpg" alt=""/>
                <div className="bann_capt ">
                  <div className="maxheight">
                    <img src="../images/icon1.png" alt=""/>
                    <div className="bann_title">Revisa nuestros paquetes</div>
                    <a href="">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_4">
            <div className="banner">
              <div className="gall_block">
                <div className="bann_capt  bn__1">
                  <div className="maxheight">
                    <img src="../images/icon2.png" alt=""/>
                    <div className="bann_title">Prueba nuestras hamburgesas</div>
                    <a href="">Ver más</a>
                  </div>
                </div>
                <img src="../images/h5.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="grid_4">
            <div className="banner ">
              <div className="gall_block">
                <img src="../images/h6.jpg" alt=""/>
                <div className="bann_capt  bn__2">
                  <div className="maxheight">
                    <img src="../images/icon3.png" alt=""/>
                    <div className="bann_title">Happy Hours
                      <br/> &amp; Ofertas</div>
                    <a href="">ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
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
          <div className="howto">
            <h2 className="title grid_12">Menú</h2>
          </div>
          </div>
          </section>
    )
  }
}
