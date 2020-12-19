import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage'
import "./sass/main.scss"
import Navbar from './components/naavbar';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navbar />
       <Router>
        <switch>
          <Route path="/" exact component={HomePage} />
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
