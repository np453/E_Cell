import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = props => {
    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const toggleSideBar = () => {
        setWidth("33.34%")
    }
    const toggleSideBarClose = () => {
        setWidth(0)
    }
        return (
            <div style={{backgroundColor:props.navbarColor}} className="navbar__container container-fluid p-0">
                <ul className="sideBar p-0" style={{backgroundColor:props.sidebarBackground, width: `${width}` }}>
                    <li className="sideBar-item" onClick={toggleSideBarClose}>Close <i className="fa fa-times"></i></li>
                    {props.sideBarItems.map(m => 
                        <li className="sideBar-item">{m.item}</li>    
                    )}
                </ul>
                <div className="container">
                <nav className="navbar  navbar-expand-lg">
                    <div className="navbar-brand" style={{color:props.navbarBrandColor}}>{props.brand}</div>
                    <div className="navbar-nav ml-auto">
                        {props.navLinks.map(m => 
                            <Link to={m.link} className="p-2" style={{color:props.linkColor, textDecoration:"none", opacity:props.linkOpacity}}><div className="nav-links">{m.navLinkName}</div></Link>    
                        )}
                    </div>
                </nav>
            </div>
            </div>
        )
}


export default Navbar;