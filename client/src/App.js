import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomCarousel from './components/carousel';
function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={CustomCarousel} />
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
