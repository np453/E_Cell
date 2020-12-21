import React, { Component } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
class Testpage extends Component {
 componentDidMount() {
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
      .to(".panel", { x: () => -(container.scrollWidth - document.documentElement.clientWidth) }, 0)
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
      scale: .5,
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });
    
 }
 
    render() {
        return (
            <div>
              <div>
            <div class="spacer">
    <h1>Scroll Down</h1>
    </div>

    <section class="section portfolio">
    <h2 class="portfolio_title text-stroke parallax">Gallery</h2>
        <div class="panel">
            <div class="panel_item">
            <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
            </div>
        </div>

        <div class="panel">
            <div class="panel_item">
            <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
            </div>
        </div>
        <div class="panel">
        <div class="panel_item">
          <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
        </div>
      </div>
      <div class="panel">
        <div class="panel_item">
          <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
        </div>
      </div>
      <div class="panel">
        <div class="panel_item">
          <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
        </div>
      </div>
      <div class="panel">
        <div class="panel_item">
          <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
        </div>
      </div>
      <div class="panel">
        <div class="panel_item">
          <img class="panel_img firstAn img img-fluid" src="https://via.placeholder.com/800x600.jpg" />
        </div>
      </div>
    </section>

    <div class="spacer">
    <h1>The End</h1>
    </div>


        </div>  
            </div>
        );
    }
}

export default Testpage;