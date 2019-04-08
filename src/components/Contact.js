import React from 'react';
import Taste from '../images/taste_small.jpg';


const ContactPage = () =>
  <div id="contact" className="content-section noPadTop " >
  


<div className="container-fluid pt-5 ">
 
<div className="row justify-content-center text-center ">
    <div className="col-sm-12 mt-5  ">
      <h2><span>CONTACT US</span></h2>
  
   
 
    </div>
  </div>

 


  <div className="row p-5 form-conent justify-content-center contact-page">

     
    <div className="col-lg-5 col-md-5 p-3 align-self-top">

    <h3 className="  txt-black"><strong>BY EMAIL</strong></h3>
    <br/>
    <p>Send us an email about your event and we'll get back to you within 24 hours.</p>
      <br/>
 
      <form method="post" action="form_action.php" className="txt-black">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" className="form-control" id="fname" name="fname" />
        </div>
        <div className="form-group">
           <label htmlFor="lname">Last Name</label> 
          <input type="text" className="form-control" id="lname" name="lname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <input type="text" className="form-control" id="occasion" name="occasion" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Event Location</label>
          <input type="text" className="form-control" id="location" name="location" />
        </div>

        <div className="form-group ">
          <label htmlFor="date">Date of event</label>
          <input className="form-control" type="date" id="date" name="date" />
        </div>
        <div className="form-group ">
          <label htmlFor="time">Time of event</label>
          <input className="form-control" type="time" defaultValue="12:00:00" id="time" name="time" />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <select id="guests" className="form-control" name="guests">
            <option>50</option>
            <option>75</option>
            <option>100-150</option>
            <option>150-200</option>
            <option>200-250</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="diet">Dietary Restrictions</label>
          <input type="text" className="form-control" id="diet" name="diet" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Additional Information</label>
          <textarea className="form-control" id="message" name="message" rows={4} cols={25} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  
  
 
 
 
 

     
    <div className="col-lg-5 col-md-5 p-3  align-self-top">

    <h3 className="txt-black"><strong>BY PHONE</strong></h3>
    <br/>
    <p>Do you have a couple questions? Give us a call, we're happy to walk you through the process and answer any questions you may have. <br/><br/><a className="contact-phone" href="tel:4403394157">Cleveland - 440.339.4157</a>
    <br/>
    <a className="contact-phone" href="tel:2164030874">Columbus - 216.403.0874</a></p> 


<p className="txt-dark  "><strong>BOOKINGS: </strong>Don’t hesitate to inquire or give us a call. We are here to answer all your questions and work through all the details. We are here to answer all your questions and work through all the details with you. It’s never too early to plan for your next event and solidify the date. We understand getting the food checked off the long list of tasks planning an event has, will give you the peace of mind as an event date starts to approach.</p>
<p className="txt-dark  "><strong>PAYMENT DETAILS: </strong>We require a $250 deposit to reserve the date of your event. The remaining payment will be collected upon completion of the event. An 18% gratuity will be added for the on-sight staff. We do not charge any fee for set up, clean up or travel within a 25 mile radius of our location in Gahanna, OH.</p>
 
 
    <img alt="pizza display"  className="contact-img" src={Taste} />

</div>

</div>
 
 

 
</div>
</div>

export default ContactPage;