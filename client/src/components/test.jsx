import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
class Test extends Component {
  render() {
    return (
      <div className="container col-md-6">
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src=""
      alt="First slide"
    />
    <div className="col-md-12">
      <div className="row">Bill Gates</div>
      <div className="row">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
      <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
}

export default Test;