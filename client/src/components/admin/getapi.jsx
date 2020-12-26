import Axios from 'axios';
import React, { Component } from 'react';

class Getapi extends Component {
    state={
        show:false,
        team:[]
    }
    handleshow=async()=>{
        const data=await Axios.get('/team');
        this.setState({team:data.data});
        console.log(this.state.team[0]._id)
    }
    handledelete=async()=>{
        const data= await Axios.put(`http://localhost:1212/team/delete/${this.state.team[0]._id}`)
        console.log(data)
    }
    
    render() {
        return (
            <div>
            <div className="d-flex flex-row">
                <span onClick={this.handleshow} >Get Data</span>
                <div className="d-flex flex-row">
                    {this.state.team.map(m=>
                        <div>
                            <span>{m.name}</span><br></br>
                            {/* <span>Update</span> */}
                            <span onClick={this.handledelete}>Delete</span>
                        </div>
                        )}
                </div>

            </div>
            </div>
        );
    }
}

export default Getapi;