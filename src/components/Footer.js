import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe,   faPhone, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () =>

<div className="container-fluid text-center content-footer p-5 app-footer">
  
 
	<div className="row pt-5 mt-5">
<div className="col-lg-4">
<p><FontAwesomeIcon icon={faEnvelope} /><a className="footer-link" href="mailto:info@mywoodfiredcatering.com" >  info@mywoodfiredcatering.com</a></p>
 			<p><FontAwesomeIcon icon={faGlobe} /><a className="footer-link" href="http://mywoodfiredcatering.com/" target="_blank" > mywoodfiredcatering.com</a></p> 
 		</div>

<div className="  col-lg-4 ">
				 <p className="   d-lg-none   d-xl-none"><br/></p>
 			<p><FontAwesomeIcon icon={faMapMarkerAlt} /><a className="footer-link" href="https://www.google.com/maps/place/101+Mill+St,+Gahanna,+OH+43230/@40.0202865,-82.8819815,17z/data=!3m1!4b1!4m5!3m4!1s0x883861918b944b95:0x6e3bfcccd159c1b8!8m2!3d40.0202824!4d-82.8797928" target="_blank"> 101 Mill St. Gahanna, OH</a></p> 
 			<p> <FontAwesomeIcon icon={faPhone} /><a className="footer-link" href="tel:2164030874" > Columbus - 216.403.0874</a></p> 
 			<p><FontAwesomeIcon icon={faMapMarkerAlt} /><a className="footer-link" href="https://www.google.com/maps/place/Mentor,+OH+44060/@41.6985242,-81.4108693,12z/data=!3m1!4b1!4m5!3m4!1s0x8831a0d5e2fa2b01:0x93ec392068bcba6a!8m2!3d41.6661573!4d-81.339552" target="_blank"> Mentor, OH</a></p> 
 			<p> <FontAwesomeIcon icon={faPhone} /><a className="footer-link" href="tel:4403394157" > Cleveland - 440.339.4157</a></p> 

 			

</div>
 		



 		 		<div className="col-lg-4 ">
 		 		<p className="   d-lg-none   d-xl-none"><br/></p>
<p><FontAwesomeIcon icon={faInstagram} />  <a className="footer-link" href="https://www.instagram.com/Woodfired_CateringCo/" target="_blank">Woodfired_CateringCo</a></p>
 			<p><FontAwesomeIcon icon={faFacebookF} /><a className="footer-link" href="https://www.facebook.com/WoodfiredCateringCo" target="_blank" > WoodfiredCateringCo</a></p>
 			
 		 
 		</div>

  
 			


 
	</div>
</div>


export default Footer;