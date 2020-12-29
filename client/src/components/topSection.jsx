import React, { Component } from 'react';
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tweet from '../assets/twitter.svg'
class TopSection extends Component {
    render() {
        return (
            <div className="container-fluid p-0 landing_page_top_section__container">
                <svg className="page_curve" viewBox="0 0 1920 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="946" cy="317.5" rx="1376" ry="317.5" fill="black"/>
                </svg>
                <div className=" main_page_heading_container container">
                <div className="row m-0">
                    <div className="col-md-6 p-3">
                        <div className="row">
                        <h1 className="landing_page_main_heading">
                            Entrepreneurship Cell<br/>
                            MNNIT Allahabad
                        </h1>
                        </div>
                        <div className="row">
                            <div className="col-md-12 follow_us p-0">
                                follow us
                            </div>
                            <div className="row social_media_container">
                                <div className="social_media_item col p-1"><img  className="img img-fluid" src={fb} alt=""/></div>
                                <div className="social_media_item col p-1"><img  className="img img-fluid" src={insta} alt=""/></div>
                                <div className="social_media_item col p-1"><img  className="img img-fluid" src={linkedin} alt=""/></div>
                                <div className="social_media_item col p-1"><img  className="img img-fluid" src={tweet} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                </div>

            </div>
        );
    }
}

export default TopSection;