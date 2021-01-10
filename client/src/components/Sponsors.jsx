import React, { Component } from 'react';
import Navbar from '../components/naavbar';
import sponsors_page_banner from '../assets/sponsor_page_banner.png';

class Sponsors extends Component {
    navLinks = [
        {
          navLinkName:"Home",
          link:""
        },
        {
          navLinkName:"Speakers",
          link:"/speaker"
        },
        {
          navLinkName:"Team",
          link:""
        },
      ]
    render() {
        return (
            <div className="container-fluid sponsor_page_container p-0">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={[]} 
                navLinks={this.navLinks} 
                brand="Sponsors"
                navbarColor="transparent" 
                navbarBrandColor="#fff"
                linkColor="#c4c4c4"
                linkOpacity="1"
                position="fixed"
                // navBrandLogo={LandingPageLogo}
                />
                <div className="container sponsor_page_wrapper">
                    <div className="sponsor_page_heading">
                        <h1>Thanks to our</h1>
                        <h2>Sponsors</h2>
                        <h3>Companies which made all this possible</h3>
                    </div>
                    <img src={sponsors_page_banner} className="img img-fluid" alt="ecell mnnit allahabad sponsors page banner "/>
                </div>
            </div>
        );
    }
}

export default Sponsors;