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
                         <img src="https://i.ibb.co/BKKWkJH/favpng-dollar-sign-currency-symbol-drawing-clip-art.png" alt="favpng-pound-sign-pound-sterling-currency-symbol" border="0"></img>
                </div>

            </div>
            </div>
        );
    }
}

export default Getapi;
// https://i.ibb.co/Gn5jBbW/favpng-pound-sign-pound-sterling-currency-symbol.png
// https://i.ibb.co/DWVz9DW/favpng-currency-symbol-dollar-sign-united-states-dollar.png
// https://i.ibb.co/BKKWkJH/favpng-dollar-sign-currency-symbol-drawing-clip-art.png
// https://i.ibb.co/SPmjZLG/favpng-dollar-sign-currency-symbol-united-states-dollar.png
// https://i.ibb.co/ct7ZNdN/favpng-euro-sign-currency-symbol-dollar-sign.png