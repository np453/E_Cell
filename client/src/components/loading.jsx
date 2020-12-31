import React,{Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
export default class Loading extends Component{
    state = {
        user: [],
        error: false,
        temp: "hello",
        loading: true
    }

     
    componentDidMount = async() => {
        const { data:user } = await axios.get('/api/user/login');
            this.setState({ user, loading:false })
            
    }
    render(){

        let element =   <div class="cssloader">
                            <div class="sh1"></div>
                            <div class="sh2"></div>
                            <h4 class="lt">loading</h4>
                        </div>;

        if(!this.state.loading){
            element = <Redirect to='/' />
        }
        
        return( 
            <div className="load_wraper">
                {element}
            </div>
        )

    }
}