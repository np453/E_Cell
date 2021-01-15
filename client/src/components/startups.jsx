import React, { Component } from 'react';

class Startups extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center flex-column align-items-center startups_section container">
                <h1>Startups by MNNITians</h1>
                <div class="wrapper">
                    <div class="toggle_radio">
                        <input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" />
                        <input type="radio" class="toggle_option" id="second_toggle" name="toggle_option" />
                        <input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" />
                        <label for="first_toggle"><p>2012</p></label>
                        <label for="second_toggle"><p>2016</p></label>
                        <label for="third_toggle"><p>2018</p></label>
                        <div class="toggle_option_slider"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Startups;