import React, { Component } from 'react';
import gsap from "gsap";
import Navbar from '../components/naavbar';
import homePage_banner_video from '../assets/homePage_banner_video.mp4';
import { useMediaPredicate } from "react-media-hook";
class TopSection2 extends Component {
    state = {
        displayNav:false,
        rightSideImages : [],
        showScroll : false,
        showDownArrow:false,
        navLinks : [
            {
              navLinkName:"Speakers",
              link:"/speaker"
            },
            {
              navLinkName:"past sponsors",
              link:"/sponsor"
            },
            {
              navLinkName:"Meet the team",
              link:"/team"
            },
          ],
          sideBarItems : [
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
    }
    iconRef = React.createRef();
    tl = gsap.timeline({ repeat: -1, delay: 1, repeatDelay: 1, yoyo: true });
    
    handleScroll = () => {
      if(window.pageYOffset > 200){
          this.setState({ showDownArrow:false });
      }
      if(window.pageYOffset < 200){
          this.setState({ showDownArrow:true });
      }
  } 
    componentDidMount = async() => {
      window.addEventListener('scroll', this.handleScroll);
        // const {data : rightSideImages } = await axios.get('/front/');
        // gsap.registerPlugin(DrawSVGPlugin);
        // console.log(rightSideImages)
        // this.setState({rightSideImages});
    }
    componentWillUnmount(){
      window.removeEventListener('scroll',this.handleScroll);
  }
    showScroll = () => {
      this.setState({ showScroll:true })
    }
    render() {
      // document.body.style.overflow = this.state.showScroll === false ? "hidden" : "visible"
        return (
            <div className="container-fluid p-0 landing_page_top_section__container2">
                {<Navbar 
                sidebarBackground="#333" 
                sideBarItems={this.state.sideBarItems} 
                navLinks={this.state.navLinks} 
                brand="E-Cell MNNIT Allahabad"
                navbarColor="#000" 
                navbarBrandColor="#fff"
                linkColor="#fff"
                linkOpacity="0.9"
                // navBrandLogo={LandingPageLogo}
                />}
                <div className=" main_page_heading_container container2">
                <div className="background_networks_section m-0">
                        <div className="row d-flex justify-content-center m-0">
                        <div className="container">
                          <div className="mt-5 embed-responsive homepage_banner_container embed-responsive-21by9">
                            <video style={{pointerEvents:"none"}} autoPlay muted={true} src={ homePage_banner_video } className="homepage-video embed-responsive-item" onEnded={() => this.setState({ showDownArrow:true })}></video>
                          </div>
                          {this.state.showDownArrow && <h3 className="text-center">
                          <svg className="fa-arrow-down" width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64645 17.3536C3.84171 17.5488 4.15829 17.5488 4.35355 17.3536L7.53553 14.1716C7.7308 13.9763 7.7308 13.6597 7.53553 13.4645C7.34027 13.2692 7.02369 13.2692 6.82843 13.4645L4 16.2929L1.17157 13.4645C0.976311 13.2692 0.659728 13.2692 0.464466 13.4645C0.269204 13.6597 0.269204 13.9763 0.464466 14.1716L3.64645 17.3536ZM3.5 0L3.5 17H4.5L4.5 0L3.5 0Z" fill="white"/>
                          </svg>  
                          </h3> }
                        </div>
                        
                        </div>
    

                </div>
                </div>

            </div>
        );
    }
}

export default TopSection2;