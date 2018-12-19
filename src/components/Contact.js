import React from 'react';

const ContactPage = () =>
  <div className="content-section">
  		<div className="content-container">
    <h1 className="pb-5">Contact us</h1>


<div className="container-fluid ">


<div className="row   ">
		<div className="col-lg-6 col-md-6 pb-5 text-left" >
			 
	 	<p>Wood-Fired Catering Co. is new to the Columbus area and we are ready to make your day as special as you envisioned. With over 10 year’s experience in the Cleveland area, we are excited to bring this unique catering option to Columbus and its surrounding cities.</p>
		<ul className="list-box">
		<li >
		 With over 25 toppings, we have the ability to make over 15 types of wood-fired pizza that will be served buffet style, giving guests the ability to sample all the traditional and gourmet pizzas.
		</li>
		<li >
		 Our menu includes wood-fired pizza, hand crafted pepperoni breads and our house salad. We have the ability to accommodate to dietary restrictions including Gluten free, lactose allergies, nut allergies, vegans and most others.
		</li>
 

		</ul>
		</div>
		<div className="col-lg-6 col-md-6 pb-5 content-info-box text-left">
			<h4 className="text-center"><u>Quick Facts</u></h4>

	 
		{
  /*Section: Contact v.2*/
}
;<section className="mb-4">
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center my-4">
    Contact us
  </h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">
    Do you have any questions? Please do not hesitate to contact us
    directly. Our team will come back to you within a matter of hours
    to help you.
  </p>
  <div className="row">
    {/*Grid column*/}
    <div className="col-md-12 mb-md-0 mb-5">
      <form
        id="contact-form"
        name="contact-form"
        action="mail.php"
        method="POST"
      >
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
              <label htmlFor="name" className>
                Your name
              </label>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
              />
              <label htmlFor="email" className>
                Your email
              </label>
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
              />
              <label htmlFor="subject" className>
                Subject
              </label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form">
              <textarea
                type="text"
                id="message"
                name="message"
                rows={2}
                className="form-control md-textarea"
                defaultValue={""}
              />
              <label htmlFor="message">Your message</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
      </form>
      <div className="text-center text-md-left">
        <a
          className="btn btn-primary"
          onclick="document.getElementById('contact-form').submit();"
        >
          Send
        </a>
      </div>
      <div className="status" />
    </div>
    {/*Grid column*/}
    {/*Grid column*/}
    
    {/*Grid column*/}
  </div>
</section>
{
  /*Section: Contact v.2*/
}

		</div>
	</div>

	</div>



 
 
 

 

</div>
</div>

export default ContactPage;