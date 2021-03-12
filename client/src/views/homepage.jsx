import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//animation libraries 
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Tween, Timeline } from 'react-gsap';
import ScrollReveal from 'scrollreveal';
import { VideoScroll } from 'react-video-scroll'
import { Controller, Scene } from 'react-scrollmagic';

//HomePage assets
import img_1 from '../assets/img_about_us_1.png';
import img_2 from '../assets/img_about_us_2.png'
import ren_logo from '../assets/ren_logo.png'
import back_collage from '../assets/background_collage.png';

//HomePage Components
import TopSection from './topSection'

//HomePage components
import SpeakersSection from '../components/speakersSection';
import SpeakerSectionForMobile from '../containers/speakerSectionForMobile';
import ImgCarousel from '../components/imgCarousel';
import Socials from '../components/socials';
import Startups from '../components/startups';

//test images 
import workshop_img_1 from '../assets/workshop_img_1.png';
import workshop_img_2 from '../assets/workshop_img_2.png';
import seminar_img from '../assets/seminar_img.png';
import seminar_img1 from '../assets/seminar_img1.png';
import seminar_img2 from '../assets/seminar_img2.png';

//common components
import SeminarCard from '../common/seminarCard';
import Cube from '../common/cube';

import axios from 'axios';
import { base } from '../base';

// homepage component
const TestPage = props => {
    //scroll progress in Y direction
    const { scrollYProgress } = useViewportScroll()

    //change content initial word
    const [content, setContent] = useState("Involve.")

    //change class of content, once the changing has stopped
    const [contentClass, setContentClass] = useState("first_content_word")

    //initially hide the arrow
    const [showArrow, setArrowVisibility] = useState(false)

    //onScroll animations
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.8, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    const [gallery, setGallery] = useState([])
    //ref to About us section
    const aboutUsRef = useRef(null);


    const executeTopScroll = () => console.log(1)

    //items that will appear on sidebar in mobile view
    const sideBarItems = [
        {
          item:"Speakers"
        },
        {
          item:"Sponsors"
        },
        {
          item:"Team"
        }
      ]

      //navbar links in homePage navbar
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

    //change content component words
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
        ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        ScrollReveal().reveal('.ren_logo_1', { viewFactor:1, scale:1.2 })
        ScrollReveal().reveal(".change_content_section", {  viewFactor:0.9, afterReveal:changeContent })
        axios.get('/api/works/').then(data => {setGallery(data.data)})
    }, []);

    //change content component function
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

            {/*TopSection of LandingPage*/}
            <TopSection aboutUsRef={aboutUsRef} executeTopScroll={executeTopScroll}/>

            {/* Change content section */}
            <div style={{background:"black"}}className="row pt-5 m-0 change_content_section vh-100">
                    <img src={back_collage} className="img img-fluid" alt=""/>
                    <motion.h1 className="content landingPage_content_heading">
                        <span className={contentClass}>{content}</span>
                    </motion.h1>
                </div>
            {/*About us section*/}
            <Controller>
            <Scene
                triggerHook="onLeave"
                duration={3000}
                pin
            >
                { progress => (
                <div className="sticky what_we_do_section about_us_section">
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
                            <img src={img_2} className="img img-fluid img_1" alt=""/>
                        </div>
                        }
                    >
                <Tween from={{ opacity: 0, y:100 }} to={{ y:-100, opacity: 1 }}/>
                <Tween to={{ y: -50, opacity:0 }} />
                
              </Timeline>
              <Timeline target={
                  <div className="container d-flex justify-content-center">
                    <img src={img_1} className="img img-fluid img_1" alt=""/>
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

    {/*What we do section*/}
    </Controller>  
    <Controller>
            <Scene
                triggerHook="onLeave"
                duration={3000}
                pin
            >
                { progress => (
                <div className="what_we_do_section">
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
                        </div>
                        }
                    >     
                <Tween from={{  y:0, opacity:0, }} to={{ opacity:1 }}/>
                <Tween to={{ y: -160, opacity:0.8,  }} />
                <Tween to={{ y: -180, opacity:0 }} />
                
              </Timeline>
              
            </Timeline>
            {/* <Timeline target={
                
                }
                    /> */}
          </div>
        )}
      </Scene>
    </Controller>  

    {/*Renissance events image section*/}
    <div className="container renissance_image_gallery d-flex justify-content-center flex-column">
        <div style={{ pointerEvents:"none" }} className="row d-flex justify-content-center">
            {gallery.map(m => 
                <div className="col-md-5 mb-4 d-flex flex-column align-items-center justify-content-center p-2">
                    <img className="img img-fluid" src={base + 'media/' + m.route + '/' + m.filename} alt={"mnnit renaissance" + m.title}/>
                    <h4>{m.title}</h4>
                    <p className="text-center">{m.description}</p>
                </div>    
            )}
        </div>
        <div className="d-flex justify-content-center homePage_explore_events_button">
            <div className="button_wrapper">
                <a href="http://ecellmnnit.com/renaissance/"><button>explore all events</button></a>
            </div>
        </div>
    </div>

    {/*What we do :: workshops*/}
    <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
                { progress => (
                <div className="vh-100 what_we_do_section">
                    <Timeline totalProgress={progress} paused>
                    <Tween
                        from={{ y:0, opacity:0 }}
                        to={{ y:0, opacity:1 }}
                    >
                    
                      <div className="workshops_section container d-flex flex-column align-items-center justify-content-center">
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
                        <div style={{ pointerEvents:"none" }} className=" row workshop_images">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <img className="workshop_image1 img img-fluid" src={workshop_img_1} alt=""/>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <img className="workshop_image2 img img-fluid" src={workshop_img_2} alt=""/>
                            </div>
                        </div>
                    </div>
                    </Tween>
                    <Tween to={{ y:0, opacity:0 }} />
            </Timeline>
            
          </div>
        )}
      </Scene>
    </Controller> 

    {/*What we do :: Seminars*/}
    <Controller>
            <Scene
                triggerHook="onLeave"
                duration={750}
                pin
            >
                { progress => (
                <div className="sticky seminar_section">
                    <Timeline totalProgress={progress} paused>
                    <Tween
                        from={{ y:20, opacity:0 }}
                        to={{ y:0, opacity:1 }}
                    >
                      <div className="container">
                        <h1 className="text-center">Seminars</h1>
                        <div style={{ fontFamily:"Ubuntu" }} className="text-center">
                                <h2>E-cell presents you a series of  seminars on Fundraising, Incubation and Startup policies</h2>
                            <div className="d-flex justify-content-center flex-column">
                                <SeminarCard title="FUNDRAISING" content="
                                    The Seminar details the nuances and the process of seeking funds for
                                    entrepreneurs and their startups through a series of investments
                                    to fuel up the business as fundraising plays an important role in 
                                    defining the success and stability of any enterprise.
                                "
                                    image={seminar_img}
                                />
                                <SeminarCard title="INCUBATION" content="
                                    The seminar gives the startups an 
                                    overview of business incubators which help the start-ups to 
                                    manage finances, ensure proper utilization of the money and 
                                    various types of support This seminar educates the entrepreneurs
                                    about everything related to the incubation process
                                "
                                    image={seminar_img1}
                                />
                                <SeminarCard title="STARTUP POLICY" content="
                                    The Seminar  covers the startup schemes and economic 
                                    goals that help in building a strong ecosystem for 
                                    nurturing startups by facilitating ease of doing business, 
                                    promoting foreign investments etc
                                "
                                    image={seminar_img2}
                                />
                            </div>
                        </div>
                    </div>
                    </Tween>
            </Timeline>
            
          </div>
        )}
      </Scene>
    </Controller> 


    {/* Startups by MNNITians */}
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
                            from={{ y:80, opacity:0 }}
                            to={{ y:0, opacity:1 }}
                        >
                        <div>
                            <Startups/>
                        </div>
                        
                        </Tween>
                    </Timeline>
                </div>
            )}
      </Scene>    
    </Controller>

    

    {/* Speaker section */}
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={1600}
            pin
            >
                { progress => (
                <div className="speaker_section_for_laptop_wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ y:80, opacity:0 }}
                            to={{ y:-4, opacity:1 }}
                        >
                        <div>
                        <div className="speaker_section_for_laptop">
                            <SpeakersSection />
                        </div>
                        {/* <div className="speaker_section_for_mobile">
                            <SpeakerSectionForMobile />
                        </div> */}
                        </div>
                        
                        </Tween>
                    </Timeline>
                </div>
            )}
      </Scene>    
    </Controller>

    {/* Carousel */}
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={900}
            pin
            >
                { progress => (
                <div className="">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ y:250, opacity:0 }}
                            to={{ y:150, opacity:1 }}
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

    {/*Socials :: we're 10k strong*/}
    <Controller>
        <Scene
            triggerHook="onLeave"
            duration={900}
            pin
            >
                { progress => (
                <div className="">
                    <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{y:300, opacity:0 }}
                            to={{ y:150, opacity:1 }}
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
    
    {/* Image gallery */}
    <div className="image_gallery">
        <div className="masked_text">
            <h1>Memorable moments captured</h1>
        </div>
        <Cube />
        <div className="gallery_button">
            <div className="row m-0 d-flex justify-content-center">
            <div className="button_wrapper">
                <Link to="/gallery"><button>visit gallery</button></Link>
            </div>
            </div>
        </div>
        
    </div>
    </div>    
    
    </React.Fragment>
    );
}


export default TestPage