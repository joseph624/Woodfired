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
import FaqsPage from './Faqs'
import Footer from './Footer'

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Header />
      <LandingPage />
      <MenuPage />
      {/*<AboutPage /> */}
      <ContactPage />

      <FaqsPage />

       {/*<Route
          path={routes.FAQS}
        component={FaqsPage}
      /> */}
      
 

 

      

      <Footer />

    </div>

  </Router>
export default App;
