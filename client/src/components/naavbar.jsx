import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

// customized navbar
// Navbar props->
// navBrandLogo
// brand
// navlinks -> Array of [link,navLinkName]
// navbarColor
// navbarBrandColor
// sideBarItems
// sidebarBackground

const Navbar = props => {
    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const ref = useRef();
    const toggleSideBar = () => {
        setWidth("33.34%")
    }
    const toggleSideBarClose = () => {
        setWidth(0)
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
    }, []);
    const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            setWidth(0);
        }
    };
        return (
            <div style={{backgroundColor:props.navbarColor}} className="navbar__container container-fluid p-0">
                <ul ref={ref} className="sideBar p-0" style={{backgroundColor:props.sidebarBackground, width: `${width}`, height:"100%" }}>
                    <li className="sideBar-item" onClick={toggleSideBarClose}>Close <i className="fa fa-times"></i></li>
                    {props.sideBarItems.map(m => 
                        <li className="sideBar-item">{m.item}</li>    
                    )}
                </ul>
                <div className="container">
                <nav className="navbar  navbar-expand-lg">
                    <div className="navbar-brand" style={{color:props.navbarBrandColor}}>
                    <img src={props.navBrandLogo} alt=""/>
                        {props.brand}
                    </div>
                    <div className="collapse navbar-collapse">
                    <div className="navbar-nav ml-auto">
                        {props.navLinks.map(m => 
                            <Link to={m.link} className="p-2" style={{color:props.linkColor, textDecoration:"none", opacity:props.linkOpacity, fontFamily:"sans-serif"}}><div className="nav-links">{m.navLinkName}</div></Link>    
                        )}
                    </div>
                    </div>
                    <button onClick={toggleSideBar} className="ml-auto navbar-toggler" type="button" 
                            data-toggle="collapse" 
                             aria-controls="nav__links" aria-expanded="false" 
                             aria-label="Toggle navigation">
                                <span className="icon-bar top-bar" style={{height:"0.4rem"}}></span>
                                <span className="icon-bar middle-bar" style={{height:"0.4rem"}}></span>
                                <span className="icon-bar bottom-bar" style={{height:"0.4rem"}}></span>
                    </button>
                </nav>
            </div>
            </div>
        )
}


export default Navbar;