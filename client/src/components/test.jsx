import React, { Component } from 'react';
import Carousel from 'react-responsive-carousel';
import Blockquote from '../assets/blockquote.svg'

class Testcar extends Component {
    render() {
        return (
            <div>
                <Carousel showArrows={true}>
                <div>
                    <div>
                        <div className="row justify-content-center">
                            <div className="row justify-content-center">
                                <img src={Blockquote}></img>

                            </div>
                            <div className="row justify-content-center">
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue molestie libero eu accumsan. Suspendisse consequat tristique sollicitudin.
                                </span>

                            </div>

                        </div>
                        <div className="row">

                        </div>
                    </div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default Testcar;