import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class sectionA extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            </Row>
            <Row>
            <Col>
      <div className="box">
      <br/>
      <br/>
          <div className="grid_5 preffix_1">
            <h2>Welcome</h2>
            <p>Post about this
              <strong className="color1">
                <a href="" rel="nofollow">freebie</a>
              </strong> will tell all you need to know about it. Need a good choice of
              <strong className="color1">
                <a href="" rel="nofollow">themes</a>
              </strong>? Visit TemplateMonster’s website.</p>
            Aliquam nibh e,estas id dictum a, commodo. Praesent faucibus malesuada faucibusonec laeet metus id laoreet malesuadarem ipsum
            dolor sit
            <br/>
            <a href="" className="btn">more</a>
          </div>
          <div className="grid_5">
            <h2>Feel the Savor of Life</h2>
            Dervamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo. Praesent faucibus malesuada
            ucibus. Donec laeet metus id laoreet malesuadarem ipsum dosit ametctetur adipiscing elit. Nullam consectetur
            orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum.
            <br/>
            <a href="" className="btn">more</a>
          </div>
        </div>
        </Col>
        </Row>
        <Row>
            <Col>
      <h2>Dishes for You to Try</h2>
    <div className="gallery">
        <a href="" className="gall_item">
          <img src="./age1_img4.jpg" alt=""/>
        </a>
        <a href="" className="link1">+</a>
      </div>
      <div className="grid_4">
        <a href="" className="gall_item">
          <img src="./page1_img5.jpg" alt=""/>
        </a>
        <a href="" className="link1">+</a>
      </div>
      <div className="grid_4">
        <a href="./big3.jpg" className="gall_item">
          <img src="./page1_img6.jpg" alt=""/>
        </a>
        <a href="" className="link1">+</a>
        <div className="clear"></div>
      </div>
            </Col>
           <Col>
      <h2>Testimonials</h2>
      <blockquote className="bq1">
        <img src="./img7.jpg" alt="" className="img_inner fleft noresize"/>
        <div className="extra_wrapper">
          <div className="bq_title color1">Mark Wood</div>
          Sivamus at magna non nuncer tristique rhoncus. Aliquame nibh ante, egestas id dictumertolom commodo. Praesent faucib mal.
          <a href="">
            <span className="fa fa-chevron-right"></span>more testimonials</a>
        </div>
      </blockquote>
      </Col>
      </Row>
      <Row>
      <Col>
      <h2>What’s new</h2>
      <div className="block2">
        <time datetime="2014-01-01">11
          <br/>June</time>
        <div className="extra_wrapper">
          <div className="text1">
            <a href="">Vivamus at magna non nunc </a>
          </div>Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibus
        </div>
      </div>
      <div className="block2">
        <time datetime="2014-01-01">15
          <br/>APR</time>
        <div className="extra_wrapper">
          <div className="text1">
            <a href="">Tivamus at magna non nunc </a>
          </div>Rehoncus. Aliquam nibh antegestas id dictum a, commodo. Praesenterto faucibus malesuada faucibu
        </div>
      </div>
      </Col>
      <Col>
      <h2>Opening Hours</h2>
      <ul className="shed">
        <li>
          <span>Breakfast:</span> 8AM - 11AM</li>
        <li>
          <span>Grill Menu:</span> 12AM - 12PM</li>
        <li>
          <span>Live Musiс:</span> 8AM - 11AM</li>
      </ul>
      </Col>
      </Row>
      </Container>
    )
  }
}
