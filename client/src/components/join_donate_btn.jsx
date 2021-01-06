import React, { Component } from 'react'

class Donate_jon_btn extends Component {
    
    state = {
        opacity: "0"
    }
    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount(){
    //     window.removeEventListener('scroll',this.handleScroll);
    // }

    // handleScroll = (event)=>{
    //     if(window.pageYOffset > 863){
    //         this.setState({opacity:"1"});
    //     }
    //     if(window.pageYOffset < 863){
    //         this.setState({opacity:"0"});
    //     }
    // } 

    render() {
        return (
            
            <div className="donate_join_btn">
                <button className="donate_button">Donate</button>
                <button className="join_button">Join</button>
            </div>
        );
    }
}

export default Donate_jon_btn;