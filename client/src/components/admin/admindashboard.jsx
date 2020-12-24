import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state={
        redirect:true
    }
    render() {
        // if(Cookies.get('admintoken')){
        //     this.setState({redirect:false})
        // }
        // console.log(this.state.redirect)
        if(!Cookies.get('admintoken')) {
            this.setState({redirect:false})
            return <Redirect to="/admin_login"/>
        }
        
        return (
            <div className="container justify-content-center">
            <div className="d-flex flex-column">
                <Link to="/admin_image"><span className="dashboard_Link">Gallery</span></Link>
                <Link to="/admin_team"><span className="dashboard_Link">Team API</span></Link>
                <Link to="/admin_speaker"><span className="dashboard_Link">Speaker API</span></Link>
                <Link to="/admin_works"><span className="dashboard_Link">Works API</span></Link>
                <Link to="/admin_sponsor"><span className="dashboard_Link">Sponsors API</span></Link>
            </div>
            </div>
        );
    }
}

export default Dashboard;