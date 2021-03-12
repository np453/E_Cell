import React, { Component } from 'react';
import Slider from "react-slick";
import i1 from '../assets/cube_images/1.png'
import i2 from '../assets/cube_images/2.png'
import i3 from '../assets/cube_images/3.png'
import i4 from '../assets/cube_images/4.png'

class TestComp extends Component {

     state = {
        settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        },
        currentSlide : 0
      };

    ImageInFocus = e => {

        //image which is clicked
        console.log(this.state.currentSlide, parseInt(e.target.id))
        if (this.state.currentSlide === 3 && parseInt(e.target.id) === 0) {
            
             this.slider.slickNext()
        }
        else if (e.target.id > this.state.currentSlide) {
           return this.slider.slickNext()
        }
        else if (e.target.id < this.state.currentSlide) {
           return this.slider.slickPrev()
        }
        
    }
    nextClick = e => {
        this.setState({ currentSlide : e })
    }

    render() {

        return (
        <div style={{ minHeight:"100vh" }} className="container-fluid">
            <div className="container mt-5" style={{ backgroundColor:"green"  }}>


                <Slider ref={c => (this.slider = c)} {...this.state.settings} afterChange={this.nextClick}>
                <div onClick={this.ImageInFocus}>
                    <img id="0" className="img img-fluid" src={i1} alt=""/>
                    <h3 className="text-center">1</h3>
                </div>
                <div onClick={this.ImageInFocus}>
                    <img id="1" className="img img-fluid" src={i2} alt=""/>
                    <h3 className="text-center">2</h3>
                </div>
                <div onClick={this.ImageInFocus}>
                    <img id="2" className="img img-fluid" src={i3} alt=""/>
                    <h3 className="text-center">3</h3>
                </div>
                <div onClick={this.ImageInFocus}>
                    <img id="3" className="img img-fluid" src={i4} alt=""/>
                    <h3 className="text-center">4</h3>
                </div>
                </Slider>
            </div>
        </div>
        );
    }
}

export default TestComp;