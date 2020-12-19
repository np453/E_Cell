import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class CustomCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                <div>
                    {/* <img src="assets/1.jpeg" /> */}
                    <p>Part-1</p>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p>Part-2</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p>Part-3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default CustomCarousel;