import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';
class Hexagon extends Component {
    componentDidMount = async() => {
      const { data:speaker } = await axios.get('/ispeaker');
      console.log(speaker)
    }
    render() {
        return (
            <div className="row d-flex justify-content-center">
            <div className="col-md-6">
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
        );
    }
}

export default Hexagon;