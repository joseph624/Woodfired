import React from 'react';
/*import { Link } from 'react-router-dom'; */
import { HashLink as Link } from 'react-router-hash-link';

import * as routes from '../constants/routes';


class Navigation extends React.Component{  
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
          console.log('go');
      }
    });
  }


 render() {
    return (
<div className="container-fluid">
<nav className={"navbar  navbar-expand-lg navbar-light " + (this.state.isTop ? 'transparent-nav fixed-top position-absolute' : 'transparent-nav-off fixed-top')}>
 <a class="navbar-brand" id="logo"  href="#"></a>
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
    <ul className="navbar-nav ml-auto align-items-end mx-auto">
      <li className={"nav-item active "  + (this.state.isTop ? '' : 'nav-space')} >
        <Link to="#home" className="nav-link">Home<span className="sr-only">home page</span></Link>
    </li>
      <li className={"nav-item " + (this.state.isTop ? '' : 'nav-space')} >
          <Link to="#menu" className="nav-link">Menu</Link>
      </li>
    
      <li className={"nav-item " + (this.state.isTop ? '' : 'nav-space')}>
         <Link to="#about" className="nav-link">About Us</Link>
      </li>
      <li className={"nav-item " + (this.state.isTop ? '' : 'nav-space')}>
         <Link to="#contact" className="nav-link">Contact Us</Link>
      </li>

       
    </ul>
  </div>
 <a href="#home" id="logo" className={"" +(this.state.isTop ?  'd-none' : '' )}>Wood Fired Catering</a> 
</nav>
</div>
    );
  }
 
 
 
 }
 
export default Navigation;

