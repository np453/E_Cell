import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/homepage'
import TopSection2 from './views/topSection2'
import "./sass/main.scss"
import Footer from './components/footer';
import Gallery from './components/Gallery';
import Login from './components/admin/login';
import Register from './components/admin/adminregister';
import Getapi from './components/admin/getapi';
import Navbar from './components/naavbar';
import TestPage from './components/testpage';
import Test from './components/test';
import Dashboard from './components/admin/admindashboard';
import Loading from './components/loading';
import TopSection3 from './views/topSection3';
import SpeakerPageContainer from './containers/SpeakerPageContainer';
import Donate_jon_btn from './components/join_donate_btn'
import TopSection from './components/topSection';
function App() {
  return (
    <div>
       <Router>
        <switch>
          <Route path="/lg" exact component={Loading} />
          <Route path="/" exact  component={HomePage} />
          <Route path="/admin_login" exact component={Login} />
          {/* <Route path="/admin_register"  component={Register} /> */}
          <Route path="/admin_dashboard" exact component={Dashboard} />
          <Route path="/admin_show" exact component={Getapi} />
          <Route path="/test"  exact component={TopSection} />
          <Route path="/test101"  exact component={TestPage} />
          <Route path="/2"  exact component={TopSection2} />
          <Route path="/3"  exact component={TopSection3} />
          <Route path="/speaker"  exact component={SpeakerPageContainer} />
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
