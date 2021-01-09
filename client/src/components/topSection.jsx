import React, { Component } from 'react';
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tweet from '../assets/twitter.svg'
import axios from 'axios'
import {base} from '../base';

// topsection with white theme
class TopSection extends Component {
    state = {
        rightSideImages : []
    }
    componentDidMount = async() => {
        const {data : rightSideImages } = await axios.get('/front/');
        console.log(rightSideImages)
        this.setState({rightSideImages});
    }
    
    render() {
        const img_right = this.state.rightSideImages === undefined ? [] : this.state.rightSideImages
        const img1 = img_right[0]===undefined ? null : img_right[0].filename
        const img2 = img_right[1]===undefined ? null : img_right[1].filename
        const img3 = img_right[2]===undefined ? null : img_right[2].filename
        const img4 = img_right[3]===undefined ? null : img_right[3].filename
        const img5 = img_right[4]===undefined ? null : img_right[4].filename
        const img6 = img_right[5]===undefined ? null : img_right[5].filename
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
                            ENTREPRENEURSHIP CELL<br/>
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
                    <div className="top_section_right_side_image_collage">
                            <div className="row m-0">
                                <div className="p-0 col-md-6">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img1 } alt=""/>
                                </div>
                                <div className="p-0 col-md-6">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img2} alt=""/>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="p-0 col-md-7">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img3} alt=""/>
                                </div>
                                <div className="p-0 col-md-5">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img4} alt=""/>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="p-0 col-md-5">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img5} alt=""/>
                                </div>
                                <div className="p-0 col-md-7">
                                    <img className="img img-fluid top_section_right_side_each_image" src={base + 'media/front/'+img6} alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
                </div>

            </div>
        );
    }
}

export default TopSection;