import React, { Component } from 'react'
import iice_logo from '../assets/iice_logo.png'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                <footer>
                    <div className="row m-0">
                        <div className="col-md-4 footer__heading_1">
                            <div className="col-md-12 d-flex h_ justify-content-center">E-CELL</div>
                            <div className="col-md-12 d-flex h__ justify-content-center">MNNIT</div>
                            <div className="col-md-12 d-flex h___ justify-content-center">ALLAHABAD</div>
                            <div className="col-md-12 d-flex mt-5 collab_line justify-content-center">
                                in collaboration with
                            </div>
                            <div className="col-md-12 d-flex mt-5 justify-content-center">
                                <img src={iice_logo} className="img img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h5>Important Links</h5>
                            <h6>Our Team</h6>
                            <h6>Our Sponsers</h6>
                            <h6>Rennisance</h6>
                            <h6>Past Speakers</h6>
                        </div>
                        <div className="col-md-2">
                            <h5>Social Media</h5>
                            <h6>Facebook</h6>
                            <h6>Instagram</h6>
                            <h6>Linkedin</h6>
                            <h6>twitter</h6>
                            <h6>Youtube</h6>
                        </div>
                        <div className="col-md-3">
                            <h5>Know about our activities</h5>
                            <form action="" className="form-group form_group_footer">
                                <label htmlFor="footer_email">email</label>
                                <input className="form-control" name="footer_email"type="text"/>
                                <i class="fa fa-send-o"></i>
                            </form>
                        </div>
                    </div>
                    <div className="row m-0 mt-5">
                        <div className="col-md-12 developer__section d-flex justify-content-center">
                            Developed by&nbsp;&nbsp;<span>Devang</span>&nbsp;&nbsp;and&nbsp;&nbsp; <span>Naman</span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
