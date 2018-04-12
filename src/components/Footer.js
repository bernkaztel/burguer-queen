import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="grid_12">
              <div className="socials">
                <a className="fa fa-twitter"></a>
                <a  className="fa fa-facebook"></a>
                <a  className="fa fa-google-plus"></a>
                <a className="fa fa-pinterest"></a>
              </div>
              <div className="copyright">
                <span className="brand">Bliss </span> &copy;
                <span id="copyright-year"></span> |
                <a >Privacy Policy</a>
                <div>Website designed by
                  <a rel="nofollow">TemplateMonster.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
