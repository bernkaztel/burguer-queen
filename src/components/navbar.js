import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <section id="stuck_container">
        <nav>
          <ul id="navlist">
            <li>
            <Link to="/">
                <img
                  id="navlistimg"
                  src="../images/logo.png"
                  height="55px"
                  alt="Logo alt"
                />
</Link>
            </li>
            <li>
            <Link to="/menu">Menu</Link>
            </li>
            <li>
            <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        <div className="clear" />
      </section>
    );
  }
}
