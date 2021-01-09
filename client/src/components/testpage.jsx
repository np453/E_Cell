import React, { Component } from 'react';
import fg from '../assets/facebook.svg'

//test component
class TestPage extends Component {
    render() {
      const path="../assets/";
      const imgn="1609337587086-download.png";
      const imgname = 'facebook.svg';
        return (
          <div>
            <img src={require(path+imgn).default}></img>
          </div>
      
        );
    }
}

export default TestPage;