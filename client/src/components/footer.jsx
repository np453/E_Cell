import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="row m-0">
                        <div className="col-md-4 d-flex justify-content-center footer__heading">
                            E-cell<br/>MNNIT Allahabad
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
