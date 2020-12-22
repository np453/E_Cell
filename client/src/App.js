import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage'
import "./sass/main.scss"
import Navbar from './components/naavbar';
import Footer from './components/footer';
import Gallery from './components/Gallery';
function App() {

  return (
    <div>
      <Navbar />
       <Router>
        <switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" exact component={Gallery} />
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
