import React, { Component } from 'react';
import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tweet from '../assets/twitter.svg'
import axios from 'axios'
import {base} from '../base';
class TopSection3 extends Component {
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
            <div>
                <div className="container-fluid p-0 t3">
                    <div className="row m-0">
                        <div className="col-md-6 t3_main_heading d-flex justify-content-center flex-column">
                            <h1 className="mr-auto">Entrepreneurship Cell</h1>
                            <h1 className="mr-auto">MNNIT Allahabad</h1>
                            <div className="col-md-12 m-0">
                            <div className="row">
                                <div className="row m-0 p-0 social_media_container">
                                    <div className="social_media_item col p-1"><img  className="img img-fluid" src={fb} alt=""/></div>
                                    <div className="social_media_item col p-1"><img  className="img img-fluid" src={insta} alt=""/></div>
                                    <div className="social_media_item col p-1"><img  className="img img-fluid" src={linkedin} alt=""/></div>
                                    <div className="social_media_item col p-1"><img  className="img img-fluid" src={tweet} alt=""/></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 img_container_t3_">
                            <div className="row m-0 img_container_t3">
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img1} alt=""/>
                                </div>
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img2} alt=""/>
                                </div>
                            </div>
                            <div className="row img_container_t3 m-0">
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img3} alt=""/>
                                </div>
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img4} alt=""/>
                                </div>
                            </div>
                            <div className="row img_container_t3 m-0">
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img5} alt=""/>
                                </div>
                                <div className="col-md-6 p-0 m-0">
                                    <img className="p-2 img img-fluid" src={base + 'media/front/'+img6} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopSection3;