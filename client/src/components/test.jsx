import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import s1 from '../assets/s1.png'
class Test extends Component {
  render() {
    return (
      <div className="container-fluid p-3">
          <div className="container carousel_container" >
        <Carousel>
  <Carousel.Item interval={1000}>
    
    <div className="col-md-12 container">
      <div className="row justify-content-center">
          <img
          className="d-block img img-fluid img_wrapper"
          src={s1}
          alt="First slide"
          height="100"
          width="100"
        />
      </div>
      <div className="content_wrapper">
        <div className="row justify-content-center mt-4">Bill Gates</div>
      <div className="row justify-content-center">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
      <div className="row justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      
    </div>
    {/* <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    
    <div className="col-md-12 container">
      <div className="row justify-content-center">
          <img
          className="d-block img img-fluid img_wrapper"
          src={s1}
          alt="First slide"
          height="100"
          width="100"
        />
      </div>
      <div className="content_wrapper">
        <div className="row justify-content-center mt-4">Bill Gates</div>
      <div className="row justify-content-center">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
      <div className="row justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      
    </div>
    {/* <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    
    <div className="col-md-12 container">
      <div className="row justify-content-center">
          <img
          className="d-block img img-fluid img_wrapper"
          src={s1}
          alt="First slide"
          height="100"
          width="100"
        />
      </div>
      <div className="content_wrapper">
        <div className="row justify-content-center mt-4">Bill Gates</div>
      <div className="row justify-content-center">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
      <div className="row justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      
    </div>
    {/* <Carousel.Caption style={{top:"0%"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>  
</Carousel>
      </div>
      </div>
    );
  }
}

export default Test;










// import React, { Component } from 'react';
// import {Carousel} from 'react-bootstrap'
// import s1 from '../assets/s1.png'
// class Test extends Component {
//   render() {
//     return (
//       <div className="container-fluid p-5">
//           <div className="container carousel_container ">
//         <Carousel>
//   <Carousel.Item interval={1000}>
//     <div className="col-md-8 justify-content-center">
//       <div className="row">
//         <img src={s1}  className="img img-fluid carousal_img"></img>
//       </div>
//       <div className="row"></div>
//       <div className="row"></div>
//     </div>
//     <Carousel.Caption style={{top:"0%"}}>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src=""
//       alt="First slide"
//     />
//     <div className="col-md-12">
//       <div className="row">Bill Gates</div>
//       <div className="row">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
//       <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//     </div>
//     <Carousel.Caption style={{top:"0%"}}>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src=""
//       alt="First slide"
//     />
//     <div className="col-md-12">
//       <div className="row">Bill Gates</div>
//       <div className="row">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
//       <div className="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//     </div>
//     <Carousel.Caption style={{top:"0%"}}>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//       </div>
//       </div>
//     );
//   }
// }

// export default Test;