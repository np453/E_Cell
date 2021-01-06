import React, { Component } from 'react';
import axios from 'axios';
import blob from '../assets/speakers_blob.png';
import { Link } from 'react-router-dom';
class SpeakersSection extends Component {
    state = {
        speakers : []
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="speakers_section_container container d-flex justify-content-center flex-column">
                <div className="col-md-12 d-flex justify-content-center">
                    <h1 className="speakers_section_main_page_heading">Prominant Speakers</h1>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-10 speakers_container">
            <div class="grid">
          <ul id="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img_speakers' style={{backgroundImage:`url('https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42')`}}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            
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