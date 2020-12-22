import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import ScrollReveal from 'scrollreveal';
import { VideoScroll } from 'react-video-scroll'
// import video from '../assets/756501.webm';
import img_1 from '../assets/img_about_us_1.png';
import img_2 from '../assets/img_about_us_2.png'
import Gallery from '../components/Gallery';
import Tp from '../components/testPage';
import axios from 'axios';
const TestPage = props => {
    const { scrollYProgress } = useViewportScroll()
    const [content, setContent] = useState("Innovate")
    const [contentClass, setContentClass] = useState("first_content_word")
    const [showArrow, setArrowVisibility] = useState(false)
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.8, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    const contents = [
        {
            contentClass:"first_content_word",
            content:"Incubate."
        },
        {
            contentClass:"content-2",
            content:"Innovate."
        },
        {
            contentClass:"content-3",
            content:"Involve."
        },
        {
            contentClass:"content-4",
            content:"setup."
        },
        {
            contentClass:"content-5",
            content:"motivate."
        },
        {
            contentClass:"content-5",
            content:"focus."
        },
        {
            contentClass:"content-5",
            content:"energise."
        },
        {
            contentClass:"content-5",
            content:"staminize."
        },
        {
            contentClass:"content-5",
            content:"entrepreneur."
        },
        {
            contentClass:"content-5",
            content:"power up."
        },
        {
            contentClass:"last_content_word",
            content:"get ready."
        },
        {
            contentClass:"content-2",
            content:"Innovate."
        },
        {
            contentClass:"content-3",
            content:"Involve."
        },
        {
            contentClass:"content-4",
            content:"entrepreneur."
        },
        {
            contentClass:"content-5",
            content:"motivate."
        },
        {
            contentClass:"content-5",
            content:"focus."
        },
        {
            contentClass:"content-5",
            content:"energise."
        },
        {
            contentClass:"content-5",
            content:"staminize."
        },
        {
            contentClass:"content-5",
            content:"spirits."
        },
        {
            contentClass:"content-5",
            content:"power up."
        },
        {
            contentClass:"last_content_word",
            content:"get ready."
        },
    ]
    const setStyles = (wrapperEl, videoEl, playbackRate) => {
        wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *playbackRate +'px'})`
        wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *playbackRate +'px'})`
      }
    const showArrowVisibility = () => { setArrowVisibility(true) }
    useEffect(() => {
        // const {data} = await axios.get('http://localhost:4444/upload/img')
        // setGallery(data)
        ScrollReveal().reveal(".content", { scale:8, duration:1000 })
        ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        for(let i=0;i<contents.length;i++) {
            setTimeout(() => {
                setContent(contents[i].content)
                setContentClass(contents[i].contentClass)
            }, 100*i)
            ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        }
    }, []);
    return (
        <React.Fragment>
            <div className="container-fluid landingPage p-0"> 
            <div className="row m-0">
                <div className="col-md-12 d-flex justify-content-center">
                <motion.div className="" >
                <motion.h1 style={{ y:yPosAnim}} className="content landingPage_content_heading"><span className={contentClass}>{content}</span></motion.h1>
                
            </motion.div>  
                </div>
            </div> 
            <div className="row m-0">
                <div className="col-md-12 d-flex justify-content-center">
                    { showArrow && <i className=" fa fa-2x fa-arrow-down"></i> } 
                </div>
            </div>
            <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1000}
        pin
      >
        {(progress) => (
          <div className="sticky about_us_section">
            <Timeline totalProgress={progress} paused>
            <Tween
                  from={{ y: '0%', opacity:0 }}
                  to={{ y: '-20%', opacity:1 }}
              >
                <div className="about__us__section container d-flex justify-content-center mt-5">
                <div className="animation">
                  <h1 className="text-center">About us</h1>
                  <p>E-Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the students and air an innovative streak 
                      in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful endeavors through
                       networking student enterprises 
                      from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.
                      </p>               
                </div>
                </div>
              </Tween>
              <Timeline target={
                  <div className="container d-flex justify-content-center">
                    <img src={img_1} className="img img-fluid img_1" alt=""/>
                  </div>
                }
              >
                <Tween from={{ opacity: 0, y:0 }} to={{ opacity: 1 }}/>
                <Tween to={{ y: '-20%', opacity:0 }} />
                
              </Timeline>
              <Timeline target={
                  <div className="container d-flex justify-content-center">
                    <img src={img_2} className="img img-fluid img_1" alt=""/>
                  </div>
                }
              >
                <Tween from={{ opacity: 0, y:0 }} to={{ opacity: 1 }} />
                <Tween to={{ y: '-20%', opacity:0 }} />
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>     
        </div>
        <Gallery />
        <Tp />
        </React.Fragment>
    );
}


export default TestPage