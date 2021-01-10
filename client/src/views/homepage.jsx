import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import ScrollReveal from 'scrollreveal';
import { VideoScroll } from 'react-video-scroll'
import img_1 from '../assets/img_about_us_1.png';
import img_2 from '../assets/img_about_us_2.png'
import ren_logo from '../assets/ren_logo.png'
import ren_logo_1 from '../assets/ren_logo_1.png'
import Gallery from '../components/Gallery';
import Socials from '../components/socials'
import SpeakersSection from '../components/speakersSection'
import ImgCarousel from '../components/imgCarousel';
import TopSection from './topSection2'
import back_collage from '../assets/background_collage.png';
import axios from 'axios';
import LandingPageLogo from '../assets/logo.svg'
import Navbar from '../components/naavbar';


// homepage component
const TestPage = props => {
    const { scrollYProgress } = useViewportScroll()
    const [content, setContent] = useState("Involve.")
    const [contentClass, setContentClass] = useState("first_content_word")
    const [showArrow, setArrowVisibility] = useState(false)
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.8, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    const aboutUsRef = useRef(null);
    const executeTopScroll = () => console.log(1)
    const sideBarItems = [
        {
          item:"sadsad"
        },
        {
          item:"ddsadfdsf"
        },
        {
          item:"ddsadfdsf"
        }
      ]
      const navLinks = [
        {
          navLinkName:"About us",
          link:""
        },
        {
          navLinkName:"past sponsors",
          link:"/sponsors"
        },
        {
          navLinkName:"follow us",
          link:""
        },
      ]
    const contents = [
        {
            contentClass:"content-2",
            content:"Involve."
        },
        {
            contentClass:"content-3",
            content:"Ideate."
        },
        {
            contentClass:"content-4",
            content:"Incubate."
        },
        {
            contentClass:"content-5",
            content:"Innovate."
        },
        {
            contentClass:"content-5",
            content:"Let's go."
        },
        {
            contentClass:"last_content_word",
            content:"get ready."
        },
    ]
    const showArrowVisibility = () => { setArrowVisibility(true) }
    useEffect(() => {
        // const {data} = await axios.get('http://localhost:4444/upload/img')
        // setGallery(data)
        // ScrollReveal().reveal(".landingPage_content_heading", { duration:700, viewFactor:0.85, afterReveal:changeContent })
        ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        ScrollReveal().reveal('.ren_logo_1', { viewFactor:1, scale:1.2 })
        ScrollReveal().reveal(".change_content_section", {  viewFactor:0.9, afterReveal:changeContent })
    }, []);
    const changeContent = () => {
        for(let i=0;i<contents.length;i++) {
            setTimeout(() => {
                setContent(contents[i].content)
                setContentClass(contents[i].contentClass)
            }, 400*i)
            ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        }
    }
    return (
        <React.Fragment>
            <div className="container-fluid landingPage p-0"> 
            {/* <Navbar 
       sidebarBackground="#c4c4c4" 
       sideBarItems={sideBarItems} 
    //    brand="E-cell MNNIT" 
       navLinks={navLinks} 
       navbarColor="#fff" 
       navbarBrandColor="#000"
       linkColor="#222"
       linkOpacity="0.7"
       navBrandLogo={LandingPageLogo}
       /> */}
            <TopSection aboutUsRef={aboutUsRef} executeTopScroll={executeTopScroll}/>
            <div className="row m-0">
                <div className="col-md-12 d-flex justify-content-center">
                    { showArrow && <i className=" fa fa-2x fa-arrow-down"></i> } 
                </div>
            </div>
            <Controller>
            <Scene
                triggerHook="onLeave"
                duration={6000}
                pin
            >
                { progress => (
                <div className="sticky about_us_section">
                    <Timeline totalProgress={progress} paused>
                    <Tween
                        from={{ y: 250, opacity:0 }}
                        to={{ y: -100, opacity:1 }}
                    >
                        <div className="about__us__section container d-flex justify-content-center mt-5">
                        <div className="animation">
                        <h1 ref={aboutUsRef} className="text-center">About us</h1>
                        <p style={{ fontFamily:"Ubuntu" }} className="">E-Cell MNNIT was launched in October 2014 with a vision to channelize
                             and nurture college students by guiding their aspirations, efforts and 
                             passion towards entrepreneurship. It aims to deliver technical know-how of 
                             launching, running and thriving any venture, thus encouraging the students 
                             to think out of the box and evolve an effective B-Plan. 
                            <div className="col-md-12 p-0">
                            We believe that entrepreneurship is the key that can unlock India's latent 
                            inventive potential. It will not only push India to the forefront of the world
                             but also help raise the quality of life in
                            the country. We help to turn dreams into reality!
                            </div>

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
                <Tween from={{ opacity: 0, y:100 }} to={{ y:-100, opacity: 1 }}/>
                <Tween to={{ y: -50, opacity:0 }} />
                
              </Timeline>
              <Timeline target={
                  <div className="container d-flex justify-content-center">
                    <img src={img_2} className="img img-fluid img_1" alt=""/>
                  </div>
                }
              >
                <Tween from={{ opacity: 0, y:0 }} to={{ y:-100, opacity: 1 }} />
                <Tween to={{ y: -50, opacity:0 }} />
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>  
    <Controller>
            <Scene
                triggerHook="onLeave"
                duration={3000}
                pin
            >
                { progress => (
                <div className="sticky what_we_do_section">
                    <Timeline totalProgress={progress} paused>
                    <Tween
                        from={{ y: 550, opacity:0 }}
                        to={{ y: -50, opacity:1 }}
                    >
                        <div className="container d-flex justify-content-center mt-5">
                        <div className="animation">
                        <h1 className="text-center">What we do</h1>
                        <h4 className="text-center">Events. Workshops. Seminars.</h4>            
                        </div>
                        </div>
                    </Tween>
                    <Timeline target={
                        <div className="container ren_logo d-flex justify-content-center flex-column align-items-center">
                            {/* <img src={ren_logo} className="img img-fluid img_1" alt=""/> */}
                            <img src={ren_logo} className="img img-fluid" alt=""/>
                            <p style={{ fontFamily:"Ubuntu",  }} className="text-center">
                                Renaissance, the annual entrepreneurship summit of E-Cell MNNIT, 
                                is the platform where you can give wings to your ideas and take off 
                                on your entrepreneurial journey. Come attend amazing workshops, 
                                dynamic panel discussions, a savvy biz-quiz, gripping Mock-IPL auctions, 
                                exciting E-Talks and become a part of stirring E-Plan! 
                                Ideate, Pitch and get inspired at the confluence of great minds!
                            </p>
                            <div className="speakers_section_container">
                            <div 
                            style={{ background:"linear-gradient(180deg, #29C2C2 0%, rgba(96, 172, 168, 0.3) 100%)" }} 
                            className="button_wrapper">
                                <Link to="/speaker"><button>explore all events</button></Link>
                            </div>
                            </div>
                            {/* <img src={ren_logo} className="img img-fluid img_1" alt=""/> */}
                        </div>
                        }
                    >
                        
                <Tween from={{  y:0, opacity:0, }} to={{ opacity:1 }}/>
                <Tween to={{ y: -160, opacity:0.8,  }} />
                <Tween to={{ y: -180, opacity:0 }} />
                
              </Timeline>
              
            </Timeline>
            
          </div>
        )}
      </Scene>
    </Controller>  
    {/* <Gallery /> */}
    <Controller>
            <Scene
                triggerHook="onLeave"
                duration={2000}
                pin
            >
                { progress => (
                <div className="sticky what_we_do_section">
                    <Timeline totalProgress={progress} paused>
                    <Tween
                        from={{ x: -50,y:-20, opacity:0 }}
                        to={{ x: 0,y:0, opacity:1 }}
                    >
                      <div className="container what_we_do_section d-flex flex-column align-items-center justify-content-center">
                        <h1>Workshops</h1>
                        <p style={{ fontFamily:"Ubuntu" }} className="text-center">
                            E-Cell MNNIT presents you workshops related to Design thinking, 
                            IPR and Innovations that will make you understand the need for questioning 
                            real-world problems and their implications.
                            PR awareness helps in understanding the value of someone's creation or invention
                            and the ability to unfold innovations.Various elements of IPR will also
                            be discussed in the workshop.
                            You will also be enlightened to various opportunities, challenges, and facets 
                            related to fields of Design Thinking, Intellectual Property Rights (IPR) and Innovations.
                        </p>
                    </div>
                    </Tween>
            </Timeline>
            
          </div>
        )}
      </Scene>
    </Controller> 
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={1000}
            pin
            >
                { progress => (
                <div className="">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ x: -50,y:30, opacity:0 }}
                            to={{ x: 0,y:-4, opacity:1 }}
                        >
                        <div>
                        <SpeakersSection />
                        </div>
                        
                        </Tween>
                    </Timeline>
                </div>
            )}
      </Scene>    
    </Controller>
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={800}
            pin
            >
                { progress => (
                <div className="">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ x: -50,y:-20, scale:0 }}
                            to={{ x: 0,y:100, scale:1 }}
                            // to={{ x: 0,y:50, opacity:1 }}
                        >
                        <div className="vh-100 d-flex justify-content-center align-items-center">
                        <ImgCarousel />
                        </div>
                        
                        </Tween>
                    </Timeline>
                </div>
            )}
      </Scene>    
    </Controller>
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={800}
            pin
            >
                { progress => (
                <div className="">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ x: -50,y:-20, opacity:0 }}
                            to={{ x: 0,y:200, opacity:1 }}
                            // to={{ x: 0,y:50, opacity:1 }}
                        >
                        <div className="vh-100 d-flex justify-content-center align-items-center">
                        <Socials />
                        </div>
                        
                        </Tween>
                    </Timeline>
                </div>
            )}
      </Scene>    
    </Controller>
    <div style={{background:"black"}}className="row m-0 change_content_section vh-100">
        <img src={back_collage} className="img img-fluid" alt=""/>
        <motion.h1 className="content landingPage_content_heading">
            <span className={contentClass}>{content}</span>
        </motion.h1>
    </div> 
        
        
        </div>    
    
        </React.Fragment>
    );
}


export default TestPage