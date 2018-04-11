import React, { Component } from 'react';

export default class navbar extends Component {
  render() {
    return (
      <section id="stuck_container">
                <nav>
                <ul id="navlist">
                <li><a href=""><img id="navlistimg" src="../images/logo.png" height="55px" alt="Logo alt"/></a></li>
  <li><a className="textnav" href="#home">Home</a></li>
  <li><a className="textnav" href="#news">News</a></li>
  <li><a className="textnav" href="#contact">Contact</a></li>
  <li><a className="textnav" href="#about">About</a></li>
</ul> 
                </nav>
                <div className="clear"></div>
      </section>
    )
  }
}
