import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="container-fluid p-0 d-flex justify-content-center align-items-center" style={{height:"95vh",backgroundColor:"#F2F1F1"}}>
                <div style={{background:"white", padding:"3rem"}} className="page_not_found">
                    <h2>Page not found!</h2>
                    <h3 className="mb-4">The page you requested was not found</h3>
                    <Link style={{color:"#1C87A9", fontSize:"15px", fontFamily:"Titillium Web", fontWeight:"600"}} to="/">Back to Home</Link>
                </div>
            </div>
        )
    }
}
