import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/naavbar';

class Contact extends Component {
    state = {
        data : {
            name:"",
            email : "",
            description:""
        }        
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
      handleChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data })
    };
      handleSubmit=async(e)=>{
          e.preventDefault();
          const payload={
              name:this.state.data.name,
              email:this.state.data.email,
              description:this.state.data.description
          }
          console.log(payload)
          await axios.post('/api/getintouch',payload);
          this.setState({ 
              data:{
                  name:"",
                  email:"",
                  description:""
              }
          }, () => {toast.success("Response received! We'll contact you shortly")})

      }
    render() {
        return (
            <div className="main_background_wrapper container-fluid p-0 d-flex flex-column justify-content-center">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={[]} 
                navLinks={ this.navLinks } 
                brand="E-cell MNNIT"
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
                        <input name="name" onChange={this.handleChange} value={this.state.data.name} id="name" required="true" type="text"/>
                        <div className="placeholder">Your Name</div>
                    </div>
                    <div className="wrapper mb-5">
                        <input name="email" onChange={this.handleChange} value={this.state.data.email} id="email" required="true" type="text"/>
                        <div className="placeholder">Email</div>
                    </div>
                    <label htmlFor="description">description</label>
                    <textarea className="" name="description" id="description" onChange={this.handleChange} value={this.state.data.description} rows="15" />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <h6><Link to="/"><span>back to home</span></Link></h6>
                </div>
                <ToastContainer autoClose={3000}/>
            </div>
        );
    }
}

export default Contact;