import React, { Component } from 'react'
import img from '../assets/cube_images/1.png';
import img1 from '../assets/cube_images/2.png';
import img2 from '../assets/cube_images/3.png';
import img3 from '../assets/cube_images/4.png';
export default class Cube extends Component {
    state = {
        classVal: "cube"
    }
    render() {
        return (                
            <div className="container d-flex justify-content-center">
                <div class="scene justify-content-center">
                    <div class={this.state.classVal}>
                        <div class="cube__face cube__face--front d-flex align-items-center justify-content-center"><img src={img} className="img cube__img img-fluid" alt=""/></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--back"><img src={img1} className="img img-fluid cube__img" alt=""/></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--right"><img src={img2} className="img img-fluid cube__img" alt=""/></div>
                        <div class="cube__face d-flex align-items-center justify-content-center cube__face--left"><img src={img3} className="img img-fluid cube__img" alt=""/></div>
                        <div class="cube__face cube__face--top"> </div>
                        <div class="cube__face cube__face--bottom"> </div>
                    </div>
                </div>
            </div> 
        )
    }
}
