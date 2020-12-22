import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage'
import "./sass/main.scss"
import Navbar from './components/naavbar';
import Footer from './components/footer';
import Gallery from './components/Gallery';
import Image from './components/admin/image';
import Login from './components/admin/login';
import Register from './components/admin/adminregister';
function App() {

  return (
    <div>
      <Navbar />
       <Router>
        <switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/image" exact component={Image} />
          <Route path="/adminlogin" exact component={Login} />
          <Route path="/adminregister" exact component={Register} />
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
