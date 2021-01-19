import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/naavbar';

class Contact extends Component {
    satte = {
        data : {
            name:"",
            email : "",
            description:""
        },
        
    }
    navLinks = [
        {
          navLinkName:"Home",
          link:"/"
        },
        {
          navLinkName:"Speakers",
          link:"/speaker"
        },
        {
          navLinkName:"Team",
          link:"/team"
        },
        {
            navLinkName:"Sponsors",
            link:"/sponsor"
          },
      ]
    render() {
        return (
            <div className="main_background_wrapper container-fluid p-0 d-flex flex-column justify-content-center">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={[]} 
                navLinks={ this.navLinks } 
                brand="Get in Touch"
                navbarColor="transparent" 
                navbarBrandColor="#fff"
                linkColor="#c4c4c4"
                linkOpacity="1"
                position="fixed"
                // navBrandLogo={LandingPageLogo}
                />
                <div className="contact_form_wrapper">
                    <h1>Get in touch</h1>
                    
                <form className="d-flex justify-content-center align-items-center  flex-column contact_form_container">
                    
                    <div className="wrapper mt-3 mb-5">
                        <input name="name" onChange={this.handleChange} id="name" required="true" type="text"/>
                        <div className="placeholder">Your Name</div>
                    </div>
                    <div className="wrapper mb-5">
                        <input name="email" onChange={this.handleChange} id="email" required="true" type="text"/>
                        <div className="placeholder">Email</div>
                    </div>
                    <label htmlFor="description">description</label>
                    <textarea className="" name="description" id="description" rows="15" />
                    <button>Submit</button>
                </form>
                <h6><Link to="/"><span>back to home</span></Link></h6>
                </div>
            </div>
        );
    }
}

export default Contact;