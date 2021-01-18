import React, { Component } from 'react';
import axios from 'axios';
import { base } from '../base';
import {Link} from 'react-router-dom';

import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';

class SpeakerSectionForMobile extends Component {

    state = {
        speaker : []
    }

    componentDidMount = async() => {
        const { data : speaker } = await axios.get('/ispeaker/')
        this.setState({ speaker })
    }
    
    render() {
        const speaker = this.state.speaker === undefined ? null : this.state.speaker
        return (
            <div>
                <div style={{pointerEvents:"none"}} className="container d-flex justify-content-center align-items-center  flex-column speaker_section_for_mobile_container p-0">
                    <h1 className="text-center">Prominant Speakers</h1>
                    <div className="row d-flex home_page_speaker_for_mobile flex-row justify-content-center">
                        {speaker.map(m => 
                            <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                                <img src={base + 'media/' + m.route + '/' + m.filename} className="m-2 img img-fluid" alt=""/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeakerSectionForMobile;