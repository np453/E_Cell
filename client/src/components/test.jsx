import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Blockquote from '../assets/blockquote.svg'

class Testcar extends Component {
    state = {
        items: [
            {
                name:"dasf"
            },
            {
                name:"weqwe"
            },
            {
                name:"daeterersf"
            },
            {
                name:"wqrwqr"
            },
        ]
    }
    render() {
        return (
            <div className="bg-white text-primary">
                <Carousel showArrows={true} autoPlay={true} 
                    swipeable={true} 
                    infiniteLoop={true}
                    dynamicHeight={true}
                    emulateTouch={true}
                    interval={1}
                    showStatus={false}>
                {this.state.items.map(m => 
                    <div className="container">
                        <h2>{m.name}</h2> <img src={Blockquote}></img>   
                    </div>
                )}
                </Carousel>
            </div>
        );
    }
}

export default Testcar;