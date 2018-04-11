import React, { Component } from 'react';

export default class navbar extends Component {
  render() {
    return (
      <section id="stuck_container">
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <h1><a href="index.html"><img src="../images/logo.png" width="100px" alt="Logo alt"/></a></h1>
              <div className="navigation">
                <nav>
                  <ul className="sf-menu">
                    <li className="current">
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="index-1.html">menu</a>
                    </li>
                  </ul>
                </nav>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
