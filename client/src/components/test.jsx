import React, { Component } from 'react';
import { Carousel } from 'rsuite';
class Test extends Component {
  render() {
    return (
  
        <Carousel autoplay className="custom-slider">
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
              height="250"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
              height="250"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
              height="250"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
              height="250"
            />
            <img
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
              height="250"
            />
  </Carousel>
    
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