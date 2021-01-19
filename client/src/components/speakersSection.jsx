import React, { Component } from 'react';
import axios from 'axios';
import blob from '../assets/speakers_blob.png';
import { Link } from 'react-router-dom';
import { base } from '../base';

// speaker Section 
class SpeakersSection extends Component {
    state = {
        speakers : [],
        loadingSpeakers : true
    }

    componentDidMount = async()=> {
      // getting images for the hex grid
      const { data:speaker } = await axios.get('/ispeaker');
      this.setState({speakers:speaker, loadingSpeakers : false })
    }
    
    render() {
      const speakers = this.state.speakers === undefined ? null : this.state.speakers
      const el = this.state.loadingSpeakers === true ? <div style={{ height:"60vh", color:"white" }} className="container d-flex justify-content-center align-items-center"><h2>Loading...</h2></div>
      :
      <div className="speakers_section_container container d-flex justify-content-center flex-column">
                <div className="col-md-12 d-flex justify-content-center">
                    <h1 className="speakers_section_main_page_heading">Prominant Speakers</h1>
                </div> 
                <div style={{ pointerEvents:"none" }} className="col-md-12 d-flex justify-content-center">
            <div className="col-md-10 speakers_container">
            <div className="grid">
          <ul id="hexGrid">
            {/* maaping each speaker */}
            {speakers.map( m =>
              <li className="hex">
              <div className="hexIn">
                <div className="hexLink">
                  <div className='img_speakers' style={{backgroundImage:`url(${ base + 'media/ispeaker/' + m.filename})`}}></div>
                  <img src={ base + 'media/ispeaker/' + m.filename } alt=""/>
                </div>
              </div>
            </li>
              )}         
            
          </ul>
            </div>
          </div>
          </div>
              <div className="row d-flex justify-content-center">
                <div className="button_wrapper">
                  <Link to="/speaker"><button>view all speakers</button></Link>
                </div>
              </div>
            </div>
      
        return (
            el
        );
    }
}

export default SpeakersSection;