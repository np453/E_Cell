import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Speaker from '../common/speakerPageCard';
import s1 from '../assets/s1.png'
import Navbar from '../components/naavbar'
import axios from 'axios'
import { base } from '../base'
// speaker container page
class SpeakerPageContainer extends Component {
    state = {
        speaker : []
    }
    navLinks = [
        {
          navLinkName:"Home",
          link:"/"
        },
        {
          navLinkName:"past sponsors",
          link:"/sponsor"
        },
        {
          navLinkName:"Team",
          link:"/team"
        },
      ]
      backToTop = React.createRef();
      executeBackToTopScroll = () => this.backToTop.current.scrollIntoView()
      componentDidMount = async() => {
          const { data : speaker } = await axios.get('/api/speaker')
          this.setState({ speaker })
      }
      
    render() {
        const speaker = this.state.speaker === undefined ? null : this.state.speaker
        return (
            <div className="speaker_page_main_background">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={[]} 
                navLinks={this.navLinks} 
                brand="Our Speakers"
                navbarColor="transparent" 
                navbarBrandColor="#fff"
                linkColor="#fff"
                linkOpacity="1"
                position="fixed"
                // navBrandLogo={LandingPageLogo}
                />
                <div ref={this.backToTop} className="speaker_page_main_heading">
                    <h1>Prominant Speakers</h1>
                </div>
                <div className="container">
                    <div className=" row m-0 d-flex justify-content-center">
                    {speaker.map(m => 
                        <Speaker borderColor="#1D2B5C" cardColor="#010220" name={m.name} image={base + 'media/' + m.route +'/' + m.filename } designation={m.title} 
                        
                        intro={m.intro}
                        description={m.description}/>
                    )}
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