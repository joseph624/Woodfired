import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

 
import './App.css';

import Header from './Header';
import LandingPage from './Landing';
import AboutPage from './About';
import ContactPage from './Contact';
import MenuPage from './Menu';
import Footer from './Footer'

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Header />

 

      <Route
        exact path={routes.LANDING}
        component={LandingPage}
      />
      <Route
        exact path={routes.ABOUT}
        component={AboutPage}
      />
      <Route
        exact path={routes.CONTACT}
        component={ContactPage}
      />
      <Route
        exact path={routes.MENU}
        component={MenuPage}
      />

      <Footer />

    </div>

  </Router>
export default App;
