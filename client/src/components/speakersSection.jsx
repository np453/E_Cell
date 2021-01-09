import React, { Component } from 'react';
import axios from 'axios';
import blob from '../assets/speakers_blob.png';
import { Link } from 'react-router-dom';
import { base } from '../base';

// speaker Section 
class SpeakersSection extends Component {
    state = {
        speakers : []
    }

    componentDidMount = async()=> {
      // getting images for the hex grid
      const { data:speaker } = await axios.get('/ispeaker');
      this.setState({speakers:speaker})
    }
    
    render() {
      const speakers = this.state.speakers === undefined ? null : this.state.speakers
        return (
            <div className="speakers_section_container container d-flex justify-content-center flex-column">
                <div className="col-md-12 d-flex justify-content-center">
                    <h1 className="speakers_section_main_page_heading">Prominant Speakers</h1>
                </div> 
                <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-10 speakers_container">
            <div class="grid">
          <ul id="hexGrid">
            {/* maaping each speaker */}
            {speakers.map( m =>
              <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url(${ base + 'media/ispeaker/' + m.filename})`}}></div>
                  <img src={ base + 'media/ispeaker/' + m.filename } alt=""/>
                  {console.log(m)}
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
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
        );
    }
}

export default SpeakersSection;