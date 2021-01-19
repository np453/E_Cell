import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//scss file
import "./sass/main.scss"

//HomePage component anf footer
import HomePage from './views/homepage'
import Footer from './components/footer';

//admin dashboard components
import Register from './components/admin/adminregister';
import Login from './components/admin/login';
import Dashboard from './components/admin/admindashboard';

//Loading component
import Loading from './components/loading';

//route components
import SpeakerPageContainer from './containers/SpeakerPageContainer';
import Team from './components/team';
import Sponsors from './components/Sponsors';

//notification
import Notification from './containers/AllNotificationContainer'

//contact form
import Contact from './components/contact';

//This component helps in scrolling to top, when a new page loads
import ScrollToTop from './common/ScrollToTop';
import NotFoundPage from './views/404';

function App() {
  return (
    <div>
       <Router>
        <ScrollToTop>
        <switch>
          <Route path="/lg" exact component={Loading} />

          {/*HomePage route*/}
          <Route path="/" exact  component={HomePage} />

          {/*All Notifications route*/}
          <Route path="/notification" exact  component={Notification} />

          <Route path="/admin_login" exact component={Login} />
          {/* <Route path="/admin_register"  component={Register} /> */}

          {/*Admin dashboard page route*/}
          <Route path="/admin" exact component={Dashboard} />

          {/*TeamPage route*/}
          <Route path="/team"  exact component={Team} />

          {/*Speaker page route*/}
          <Route path="/speaker"  exact component={SpeakerPageContainer} />

          {/*Contact page route*/}
          <Route path="/contact"  exact component={Contact} />

          {/*Sponsor page route*/}
          <Route path="/sponsor"  exact component={Sponsors} />
          

        </switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
