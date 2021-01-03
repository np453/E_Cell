import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import s1 from '../assets/s1.png'
import bq from '../assets/blockquote.svg';
class Test extends Component {
  render() {
    return (
        <div>
            <div className="container speaker_wrapper vh-100">
                <div className="row d-flex flex-column justify-content-center align-item-center">
                    <div className="row justify-content-center"><img className="img img-fluid speaker_img" src={s1}></img></div>
                    <div className="justify-content-center ml-5">
                    <div className="col-md-12 align-item-center">
                        <h1 className="speaker_heading">Mr. Lokesh Kumar</h1>
                        
                        <h6 className="speaker_designation">co-founder Loco</h6>
                    </div>
                    <div className=" col-md-10 justify-content-center">
                    <div className="hr_line"></div></div>
                    <div className="col-md-9 justify-content-center">
                        <span className="content_wrapper">
                        Sushil Kumar, the co-founder of LOCO - a real-time mobile quiz show where contestants get a chance to win real money.
                         The app rolled out in early December of 2017 and has since had 15M+ downloads.
                        Sushil's inclination towards entrepreneurship stemmed right in college and led him to launch LOCO, 
                        after having worked for a popular education app Unacademy as an iOS and web developer.
                        Not only 
                        </span>
                    </div>
                    </div>
                </div>

            </div>
        </div>
      
    );
  }
}

export default Test;