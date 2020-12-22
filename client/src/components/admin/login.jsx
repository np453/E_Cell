import axios from 'axios';
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

class Login extends Component {
    state={
        data:{
            email:"",
            password:""
        },
        id:""
    }
    handlesubmit=async(e)=>{
        e.preventDefault();
        const admindata={
            email:this.state.data.email,
            password:this.state.data.password
        }
        const {data} = await axios.post('/admin',admindata);
        console.log(data);
        this.setState({id:jwt_decode(data).id})
        Cookies.set('admintoken',this.state.id);

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
                                <button >Login</button>
                </form>
            </div>
        );
    }
}

export default Login;