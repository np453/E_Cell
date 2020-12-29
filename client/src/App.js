import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage'
import "./sass/main.scss"
import Footer from './components/footer';
import Gallery from './components/Gallery';
import Image from './components/admin/image';
import Login from './components/admin/login';
import Register from './components/admin/adminregister';
import Team from './components/admin/team';
import Speaker from './components/admin/speaker';
import Dashboard from './components/admin/admindashboard';
import Works from './components/admin/whatwedo';
import Sponsor from './components/admin/sponsor';
import Getapi from './components/admin/getapi';
import Navbar from './components/naavbar';
import Testcar from './components/test';
import TestPage from './components/testpage';
function App() {
  return (
    <div>
       <Router>
        <switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/admin_image" exact component={Image} />
          <Route path="/admin_team" exact component={Team} />
          <Route path="/admin_speaker" exact component={Speaker} />
          <Route path="/admin_login" exact component={Login} />
          <Route path="/admin_register" exact component={Register} />
          <Route path="/admin_dashboard" exact component={Dashboard} />
          <Route path="/admin_works" exact component={Works} />
          <Route path="/admin_sponsor" exact component={Sponsor} />
          <Route path="/admin_show" exact component={Getapi} />
          <Route path="/test" exact component={TestPage} />
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
