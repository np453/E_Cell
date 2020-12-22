import React, { Component } from 'react'
export default class Navbar extends Component {
    state = {
        isOpen:false,
        width:0
    }
    toggleSideBar = () => {
        this.setState({width:"33.34%"})
    }
    toggleSideBarClose = () => {
        this.setState({width:0})
    }
    render() {
        return (
            <div className="navbar__container container-fluid p-0">
                <ul className="sideBar p-0" style={{backgroundColor:"#222", width: `${this.state.width}` }}>
                    <li className="sideBar-item" onClick={this.toggleSideBarClose}>Close <i className="fa fa-times"></i></li>
                    <li className="sideBar-item">dfdsfdf</li>
                    <li className="sideBar-item">dgdfgdfgdfg</li>
                    <li className="sideBar-item">dvdfvsvds</li>
                    <li className="sideBar-item">dscdsvdsmf</li>
                </ul>
                <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">E-cell, MNNIT</div>
                    <div className="navbar-nav ml-auto">
                        <div onClick={this.toggleSideBar} className="nav-links">follow us</div>
                        
                    </div>
                </nav>
            </div>
            </div>
        )
    }
}
