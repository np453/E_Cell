import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
class Test extends Component {
  render() {
    return (
      <div className="container-fluid p-5">
          <div className="container carousel_container ">
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
    <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
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
    <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
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
    <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      </div>
    );
  }
}

export default Test;