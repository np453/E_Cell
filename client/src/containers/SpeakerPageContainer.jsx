import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Speaker from '../common/speakerPageCard';
import s1 from '../assets/s1.png'
import Navbar from '../components/naavbar'
class SpeakerPageContainer extends Component {
    navLinks = [
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
      backToTop = React.createRef();
      executeBackToTopScroll = () => this.backToTop.current.scrollIntoView()
    render() {

        return (
            <div className="speaker_page_main_background">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={[]} 
                navLinks={this.navLinks} 
                brand="Our Speakers"
                navbarColor="transparent" 
                navbarBrandColor="#fff"
                linkColor="#1F8795"
                linkOpacity="1"
                position="fixed"
                // navBrandLogo={LandingPageLogo}
                />
                <div ref={this.backToTop} className="speaker_page_main_heading">
                    <h1>Prominant Speakers</h1>
                </div>
                <div className="container">
                    <div className=" row m-0 d-flex justify-content-center">
                    <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                        body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                    body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                    body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#64120D" cardColor="#1D0801" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                        <Speaker borderColor="#1D595C" cardColor="#001C1A" name="Lokesh Kumar" image="" designation="co-founder LOCO" 
                            body="The co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                        The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        "/>
                    </div>
                </div>
                <div className="end_section_speaker_page d-flex flex-column justify-content-center align-items-center">
                    <h5 onClick={this.executeBackToTopScroll}>Back to top</h5>
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        );
    }
}

export default SpeakerPageContainer;