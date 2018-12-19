import React from 'react';
import Navigation from './Navigation';
import Logo from '../images/woodfired_logo.PNG';

 


const Header = () =>
  <div className="App-header">
		<Navigation />
		<img src={Logo} className="App-logo" />
  </div>

 

 
export default Header;