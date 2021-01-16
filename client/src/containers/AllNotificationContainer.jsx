import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/naavbar';
import { motion } from 'framer-motion';
class AllNotificationContainer extends Component {
    state = {
        notification : [],
        loadingAllNotifications : true,
        navLinks : [
            {
                navLinkName:"Home",
                link:"/"
            },
            {
              navLinkName:"Speakers",
              link:"/speaker"
            },
            {
              navLinkName:"past sponsors",
              link:"/sponsor"
            },
            {
              navLinkName:"Meet the team",
              link:"/team"
            },
          ],
          sideBarItems : [
            {
              item:"sadsad"
            },
            {
              item:"ddsadfdsf"
            },
            {
              item:"ddsadfdsf"
            }
          ]
    }

    componentDidMount = async() => {
        const { data:notification } = await axios.get('/notifications')
        this.setState({ notification, loadingAllNotifications : false })
    }
    
    render() {

        const el = this.state.loadingAllNotifications === true ?
        <div style={{height:"60vh"}} className="container d-flex justify-content-center align-items-center pt-5"><h1 className="pt-5">Loading ...</h1></div>
        :
        <motion.table initial={{ y:20 }} animate={{ y:0 }} transition={{ duration:0.5 }} className="notifications_table table">
            <thead>
                <tr className="">
                    <th>Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {this.state.notification.map(m => 
                // <Link style={{color:"#1D8EB1"}} to={'/notification/'+m.slug}>
                    <tr className=''>
                        <td>
                            <h6 className="created_at">{m.created_at}</h6> 
                        </td>
                        <td>
                            <h5 className="mb-0 notification_title">
                                {m.content}
                            </h5>
                        </td>
                        
                        {/* <div className="ml-auto arrow_to_notification_page">
                            <i className="fa fa-arrow-right"></i>
                        </div> */}
                    </tr>  
            )}
            </tbody>
        </motion.table>

        return (
            <div className="notificaions_container container-fluid p-0">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={this.state.sideBarItems} 
                navLinks={this.state.navLinks} 
                brand="E-Cell MNNIT Allahabad"
                navbarColor="#000" 
                navbarBrandColor="#fff"
                linkColor="#fff"
                linkOpacity="0.9"
                />
                <div style={{ minHeight:"100vh" }} className="container">
                
                {el}
                </div>
            </div>
        );
    }
}

export default AllNotificationContainer;