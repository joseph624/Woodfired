import React from 'react';
import Navigation from './Navigation';
import Logo from '../images/woodfired_logo.PNG';

 


const Header = () =>
 <div className="App-header">
		 <Navigation />
		 
		 <div className="p-3 m-2 text-center txt-header-block "><h1 className="txt-header">Wood Fired Catering{'\u00A0'}Co.</h1>
		 <br/>
		 <span className="txt-header-small  ">Let Us Add Flare To Your Next Event</span></div>
  </div> 

 

 
export default Header;