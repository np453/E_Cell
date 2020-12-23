import axios from 'axios';
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state={
        data:{
            email:"",
            password:""
        },
        id:"",
        redirect:false
    }
    handlesubmit=async(e)=>{
        e.preventDefault();
        const admindata={
            email:this.state.data.email,
            password:this.state.data.password
        }
        const {data} = await axios.post('http://localhost:1212/admin',admindata);
        console.log(data);
        this.setState({id:jwt_decode(data)._id})
        Cookies.set('admintoken',this.state.id, { expires: 1 });
        this.setState({redirect:true})
        // return <Redirect to="/admin_dashboard"/>

    }
    handleInputChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    render() {
        if(this.state.redirect) {
            
            return <Redirect to="/admin_dashboard"/>
        }
        return (
            <div className=" container d-flex flex-column">
                <form onSubmit={this.handlesubmit}>
                                <label for="email">email</label>
                                <input  id="email" name="email" type="text" onChange={this.handleInputChange} value={this.state.data.email}/>
                                <label for="pass">password</label>
                                <input  name="password" id="pass" type="password" onChange={this.handleInputChange} value={this.state.data.password}/>
                                <button >Login</button>
                </form>
            </div>
        );
    }
}

export default Login;