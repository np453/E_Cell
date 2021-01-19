import React, { Component } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import img from '../assets/img_about_us_1.png';
import axios from 'axios';
class Gallery extends Component {
  state = {
    galleryImg : []
}

// horizontal gallery section 
 componentDidMount = async() => {
  //  retriving images on component did mount
  const {data:Img} = await axios.get("http://localhost:4444/upload/img")
  this.setState({galleryImg:Img})
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector(".portfolio");
    let tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: container,
        end: () => container.scrollWidth - document.documentElement.clientWidth
      },
      defaults: { ease: "none", duration: 1 }
    });
    
    tl.to(".parallax", { x: 300 })
      .to(".panel", { x: () => -(container.scrollWidth - document.documentElement.clientWidth) - 500 }, 0)
      .from(".secondAn", {
        opacity: 0,
        scale: 0.5,
        duration: 0.2,
        stagger: {
          amount: 0.8
        }
      }, 0);
    
    gsap.from(".firstAn", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse"
      }
    });
    
 }
 
    render() {
        return (
    //         <div>
    //           <div>
           

    // <section class="section portfolio">
    // {/* <h2 class="portfolio_title text-stroke parallax">Gallery</h2> */}
    //     {this.state.galleryImg.map(m => 
    //     <div class="panel">
    //     <div class="panel_item">
    //       <img className="panel_img firstAn img img-fluid" src={`data:${m.contentType};base64,`+m.buffer} alt=""/>
    //     </div>
    //   </div>  
          
    //     )}
    // </section>

    //     </div>  
    //         </div>


    <div className="container-fluid p-0 gallery_main_page">

    </div>
        );
    }
}

export default Gallery;