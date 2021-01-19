import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base } from '../base';
// import styled from 'styled-components';

// customized navbar
// Navbar props->
// navBrandLogo
// brand
// navlinks -> Array of [link,navLinkName]
// navbarColor
// navbarBrandColor
// sideBarItems
// sidebarBackground
//https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

const Navbar = props => {
    const [isOpen, setOpen] = useState(false);
    const [openNotificationBox, setOpenNotificationBox] = useState(false);
    const [width, setWidth] = useState("-300px");
    // const [ sideBarOpacity, setSideBarOpacity ] = useState(0);
    const [recent, setRecent] = useState([])
    const [speaker, setSpeaker] = useState([])
    const [email, setEmail] = useState("")
    const ref = useRef();
    const ref1 = useRef();
    const toggleSideBar = () => {
        setWidth("0px")
        // setSideBarOpacity(1)
    }
    const toggleSideBarClose = () => {
        setWidth("-300px")
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('click', handleClickOutsideNotificationBox, true);

        axios.get('/api/recent/').then(data => { setRecent(data.data) })
        axios.get('/api/speaker/').then(data => { setSpeaker(data.data) })

        return () => document.removeEventListener('click', handleClickOutsideNotificationBox, true);
    }, []);
    const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            setWidth("-300px")
            // setSideBarOpacity(0);
        }
    };
    const toggleNotificationBox = () => {

        {/*Function to open notification box*/ }
        setOpenNotificationBox(!openNotificationBox)
    }
    const handleClickOutsideNotificationBox = e => {

        {/*If clicked outside of notification box, it will close*/ }
        if (ref1.current && !ref1.current.contains(e.target)) {
            setOpenNotificationBox( false )
        }
    }
    const handleForm = (e) => {
        setEmail(e.target.value);
    }

    document.body.style.overflow = width !== "-300px" ? "hidden" : "visible"
        return (
            <div style={{backgroundColor:props.navbarColor}} className="navbar__container container-fluid p-0">
                
                {/* Sidebar */}
                <ul ref={ref} className="sideBar p-0" style={{ left:`${width}`, width: `300px`, height:"100%",  }}>
                    <li className="sideBar-item close_sidebar" onClick={toggleSideBarClose}>
                        <div className="row">
                            <div className="ecell_sidebar_title col-md-10 d-flex justify-content-start">E-cell MNNIT</div>
                            <div className="col-md-2 d-flex justify-content-end"><i className="fa fa-times"></i></div>
                        </div>
                    </li>
                    <li className="sideBar-item">Speakers</li>
                    <div className="row sideBar_speakers_row d-flex align-items-center m-0">
                        {speaker.slice(0, 3).map(m => 
                        <div className="col-md-3 p-0">
                            <div className="m-2">
                                <img className="sideBar_speakers img img-fluid" src={ base + 'media/' + m.route + '/' + m.filename } alt=""/>
                            </div>
                        </div>
                        )}
                        <Link to="/speaker"><i className="d-flex align-items-center justify-content-center fa fa-arrow-right"></i></Link>
                    </div>
                    <Link to="/sponsor"><li className="sideBar-item">Sponsors</li> </Link>
                    <Link to="/team"><li className="sideBar-item">Team</li></Link> 
                    <hr/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <form className="form">
                                <div className="form-group d-flex flex-column">
                                    <label htmlFor="">Join us</label>
                                    <input placeholder="email" className="" type="text" name="email" id="email" value={email} onChange={handleForm}/>
                                </div>
                                <button>Submit</button>
                            </form> 
                        </div>
                    </div>  
                    <Link to="/"><h6 className="back_to_home_sideBar"><span>Back to Home</span></h6></Link>
                </ul>
                <div className={"container " + "navbar-"+props.position}>
                <nav className={"navbar navbar-expand-lg " + "navbar-"+props.position}>
                    <div className="navbar-brand" style={{color:props.navbarBrandColor}}>
                    <img src={props.navBrandLogo} alt=""/>
                        {props.brand}
                    </div>
                    <div className="collapse navbar-collapse">
                    <div className="navbar-nav ml-auto">
                        {props.navLinks.map(m => 
                            <Link to={m.link} className="p-2" style={{color:props.linkColor, textDecoration:"none", opacity:props.linkOpacity, fontFamily:"sans-serif"}}><div className="nav-links">{m.navLinkName}</div></Link>    
                        )}
                        <div className="notify_box">
                            <i onClick={toggleNotificationBox} className="fa fa-bell" aria-hidden="true" />
                            
                            {/*Load notifications list*/}
                            {openNotificationBox &&
                                    <div ref={ref1} className="notification_box">
                                        <div>
                                            <h3 className="p-2 border-bottom">Notifications</h3>
                                            <ul>
                                                {recent.map(m =>
                                                    <Link onClick={() => setOpenNotificationBox(false)} style={{ color: "#444" }} to={'/notification/' + m.slug + '/'}><li className="notification_item">{m.content}</li></Link>
                                                )}
                                                <Link onClick={() => setOpenNotificationBox(false)} style={{ fontSize: "13px" }} className="read_all_notifications_external_link" to='/notification'><li style={{ color: "#2a85ad" }}>Read all <i className="fa fa-external-link"></i></li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                }
                        </div>

                    </div>
                    </div>
                    <button onClick={toggleSideBar} className="ml-auto pr-0 navbar-toggler" type="button" 
                            data-toggle="collapse" 
                             aria-controls="nav__links" aria-expanded="false" 
                             aria-label="Toggle navigation">
                                <span className="icon-bar top-bar" ></span>
                                <span className="icon-bar middle-bar" ></span>
                                <span className="icon-bar bottom-bar" ></span>
                    </button>
                </nav>
            </div>
            </div>
        )
}


export default Navbar;