import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';


class Navigation extends React.Component{  
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
          console.log('go');
      }
    });
  }


 render() {
    return (
<div className="container-fluid">
<nav className={"navbar fixed-top navbar-expand-lg navbar-light " + (this.state.isTop ? 'transparent-nav' : 'transparent-nav-off')}>
  <a className="navbar-brand" href="#">
    Wood-Fired Catering Co.
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
  
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto align-items-end">
      <li className="nav-item active">
        <Link to={routes.LANDING} className="nav-link">Home<span className="sr-only">home page</span></Link>
    </li>
      <li className="nav-item">
          <Link to={routes.MENU} className="nav-link">Menu</Link>
      </li>
       <li className="nav-item">
         <Link to={routes.ABOUT} className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
         <Link to={routes.CONTACT} className="nav-link">Contact Us</Link>
      </li>

       
    </ul>
  </div>
</nav>
</div>
    );
  }
 
 
 
 }
 
export default Navigation;

