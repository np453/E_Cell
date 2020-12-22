import axios from 'axios';
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

class Register extends Component {
    state={
        data:{
            email:"",
            password:""
        }
    }
    handlesubmit=async(e)=>{
        e.preventDefault();
        const admindata={
            email:this.state.data.email,
            password:this.state.data.password
        }
        const {data} = await axios.post('http://localhost:1212/admin/register',admindata);
        console.log(data);
    }
    handleInputChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    render() {
        return (
            <div className="d-flex flex-column">
                <form onSubmit={this.handlesubmit}>
                                <label for="email">email</label>
                                <input  id="email" name="email" type="text" onChange={this.handleInputChange} value={this.state.email}/>
                                <label for="pass">password</label>
                                <input  name="password" id="pass" type="password" onChange={this.handleInputChange} value={this.state.password}/>
                                <button >Get in</button>
                </form>
            </div>
        );
    }
}

export default Register;