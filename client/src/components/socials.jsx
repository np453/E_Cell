import React, { Component } from 'react';
import socialsvg from '../assets/social.svg'

class Socials extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <img src={socialsvg} className="img img-fluid"></img>
                </div>
                <div className="row justify-content-center social_text">
                    We're 10k Strong
                </div>
                <div className="row justify-content-center">
                <div className="col-md-4 justify-content-right align-item-right d-flex flex-column">
                    <span className="social_1">facebook followers</span>
                    <span className="social_count">10500+</span>
                </div>
                <div className="col-md-4 justify-content-center d-flex flex-column">
                    <span className="social_1">instagram followers</span>
                    <span className="social_count">1000+</span>

                </div>
                <div className="col-md-4 justify-content-left d-flex flex-column">
                    <span className="social_1">linkedin followers</span>
                    <span className="social_count">888+</span>
                </div>    
                </div>                   
            </div>
        );
    }
}

export default Socials;