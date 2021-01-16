import React, { Component } from 'react';
import axios from 'axios';
class Startups extends Component {

    state = {
        defaultRadio : "3"
    }

    componentDidMount = async() => {
        const { data:startup } = await axios.get('/recent-startup/')
    }
    
    changeRadio = e => {
        this.setState({ defaultRadio: e.target.value})
    }

    render() {
        let val = this.state.defaultRadio
        return (
            <div className="d-flex justify-content-center flex-column align-items-center startups_section container">
                <h1>Startups by MNNITians</h1>
                <div className="wrapper">
                    <div className="toggle_radio">
                        <input onClick={this.changeRadio} type="radio" value="1" checked={ val==1 ? true : false } className="toggle_option" id="first_toggle"  name="toggle_option" />
                        <input onClick={this.changeRadio} type="radio" value="2" checked={ val==2 ? true : false } className="toggle_option" id="second_toggle" name="toggle_option" />
                        <input onClick={this.changeRadio} type="radio" value="3" checked={ val==3 ? true : false } className="toggle_option" id="third_toggle"  name="toggle_option" />
                        <label htmlFor="first_toggle"><p>Older</p></label>
                        <label htmlFor="second_toggle"><p>2016-19</p></label>
                        <label htmlFor="third_toggle"><p>recent</p></label>
                        <div className="toggle_option_slider"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Startups;