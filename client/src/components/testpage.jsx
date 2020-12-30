import React, { Component } from 'react';
import fg from '../assets/facebook.svg'

class TestPage extends Component {
    render() {
      const path="../assets/";
      const imgn="1609337587086-download.png";
      const img= require('../assets/facebook.svg');
        return (
          <div style={{background:"url('../assets/facebook.svg')"}}>
            <img src="{img}"></img>
          </div>
      
        );
    }
}

export default TestPage;