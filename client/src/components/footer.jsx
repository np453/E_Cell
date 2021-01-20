import { AlexaForBusiness } from 'aws-sdk';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import iice_logo from '../assets/iice_logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Footer extends Component {
    state={
        email:""
    }
    // onchange handler for email change 
    handlechange=(e)=>{
         const value =e.target.value;
         this.setState({email:value});
    }

    // onclick handler for form submit
    handleSubmit=async (e)=>{
        e.preventDefault();
        const payload={//payload for emails
            email:this.state.email
        }
        await axios.post('/api/contact',payload);
        this.setState({
            email:""
        },() => {toast.success("Response received! We'll contact you shortly")})

    }
    render() {
        return (
            <div className="footer_container">
                <footer>
                    <div className="row m-0">
                        <div className="col-md-4 footer__heading_1">
                            {/* footer Heading  */}
                            <div className="col-md-12 d-flex h_ justify-content-center">E-CELL</div>
                            <div className="col-md-12 d-flex h__ justify-content-center">MNNIT</div>
                            <div className="col-md-12 d-flex h___ justify-content-center">ALLAHABAD</div>
                            <div className="col-md-12 d-flex mt-5 collab_line justify-content-center">
                                in collaboration with
                            </div>
                            {/* IIC Logo */}
                            <div className="col-md-12 d-flex mt-5 justify-content-center">
                                <img src={iice_logo} className="img img-fluid" alt=""/>
                            </div>
                        </div>
                        {/* website links */}
                        <div className="footer_links col-md-2">
                            <h5>Important Links</h5>
                            <Link to="/team"><h6>Our Team</h6></Link>
                            <Link to="/sponsor"><h6>Our Sponsers</h6></Link>
                            <a href="http://renaissance.mnnit.ac.in/" style={{color:'#535252'}}><h6>Rennisance</h6></a>
                            <Link to="/speaker"><h6>Past Speakers</h6></Link>
                            <Link to="/faq"><h6>FAQs</h6></Link>
                        </div>
                        {/* social Media links */}
                        
                        <div className="social_media_links_footer col-md-2">
                            <h5>Social Media</h5>
                            <a className="social_media_links_footer" href="https://www.facebook.com/mnnitecell"><h6>Facebook</h6></a>
                            <a className="social_media_links_footer" href="https://www.instagram.com/ecellmnnit/"><h6>Instagram</h6></a>
                            <a className="social_media_links_footer" href="https://www.linkedin.com/in/ecellmnnit/"><h6>Linkedin</h6></a>
                            <a className="social_media_links_footer" href="https://twitter.com/ECellMNNIT"><h6>twitter</h6></a>
                            <a className="social_media_links_footer" href="https://www.youtube.com/c/PixelsMNNIT"><h6>Youtube</h6></a>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-12 ecell_newsletter_section_footer">
                                {/* paper clip in the email form */}
                            <div className="paper_clip">
                                <svg className="paper_clip_" width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7704 3.54132C17.6789 1.36002 14.7373 0 11.4841 0C5.15181 0 0.000509153 5.15232 0 11.4838L0 13.1066L0 21.6183L0 41.5978C0 46.8343 4.25988 51.0945 9.49641 51.0945C14.3347 51.0945 18.3324 47.4554 18.9139 42.7721C18.9657 42.6529 18.9945 42.5223 18.9945 42.3833V41.5978V25.0306V16.1841C18.9945 12.3926 15.9093 9.3069 12.1173 9.3069C8.32536 9.3069 5.2401 12.3926 5.2401 16.1841V38.2559C5.2401 38.7982 5.67939 39.2382 6.22235 39.2382C6.76552 39.2382 7.20492 38.7982 7.20492 38.2559V16.184C7.20492 13.4752 9.40761 11.2717 12.1173 11.2717C14.8258 11.2717 17.0294 13.4751 17.0294 16.184V25.0305V41.5977C17.0294 45.752 13.6509 49.1305 9.49692 49.1305C5.34417 49.1305 1.96543 45.7507 1.96543 41.5977L1.96543 21.6189L1.96543 13.1072L1.96543 11.4844C1.96543 6.23569 6.23529 1.96523 11.4841 1.96523C13.4191 1.96523 15.221 2.54554 16.725 3.54132H19.7704Z" 
                                    fill="#555"/>
                                </svg>
                            </div>
                            {/* clip circle */}
                            <svg className="graphic_circle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#111111"/>
                            </svg>

                            <h5 className="email_newsletter_heading">Know about our activities</h5>
                            {/* email subscription form */}
                            <form action="" className="form-group form_group_footer">
                                <label htmlFor="footer_email">email</label>
                                <input className="form-control" value={this.state.email} onChange={this.handlechange} name="footer_email"type="text"/>
                                <i className="fa fa-send-o" style={{cursor:'pointer',zIndex:"1"}} onClick={this.handleSubmit}></i>
                            </form>
                            </div>
                            <ToastContainer autoClose={3000}/>
                        </div>
                    </div>
                    {/* website credits */}
                    {false && <div className="row m-0 mt-5">
                        <div className="col-md-12 developer__section d-flex justify-content-center">
                            <h6>Developed by&nbsp;&nbsp;<span>Devang</span>&nbsp;&nbsp;and&nbsp;&nbsp; <span>Naman</span></h6>
                        </div>
                    </div>}
                </footer>
            </div>
        )
    }
}
