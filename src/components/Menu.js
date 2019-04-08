import React from 'react';
import Peel from '../images/peel-white.png';

const MenuPage = () =>
  <div id="menu" className="  ">
  <div className=" block-black ">
  <div className="block-box-white"></div>
  </div>
  		<div className=" block-black">
 

<div className="container-fluid  pb-5 block-content ">
<div className="row justify-content-center ">
		<div className="col-sm-6 mt-5   p-5 ">
			<h2 className="dark txt-orange">MENU</h2>
		
		</div>
	</div>



<div className="row justify-content-center text-center ">
		<div className="col-sm-10 mt-5 mb-5 ">
			<h5 className="txt-orange text-uppercase"><strong>Gourmet Wood Fired Pizza display</strong></h5>
		<hr className="hr-style-grey" />

		<br/>

		<p className="light-grey txt-med">Our variety of ingredients are prepared in a manner to create the perfect bite in every slice, we will make 12 variations of wood fired pizzas ranging from traditional, vegetarian and specialties from the following selections.</p>
		</div>
	</div>

 
	<div className="row justify-content-center text-center">
		<div className="col-lg-5 col-md-5 pb-5 ">
			<h4><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}MEATS</h4>
			<p className="light-grey">Double Smoked Bacon Topping, Ezzo Pepperoni, Italian Sausage, Roasted Chicken</p>
		</div>
		<div className="col-lg-5 col-md-5 pb-5">
			<h4><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}CHEESES</h4>
			<p className="light-grey">Mild Cheddar, Herb Feta, Fresh Mozzarella, Parmesan, Signature House Blend</p>
		</div> 
	</div>
 
	<div className="row justify-content-center text-center">
	<div className="col-lg-5 col-md-5 pb-5 ">
			<h4><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}SAUCES</h4>
			<p className="light-grey">Sicilian Red, Smoked BBQ, Creamy Buffalo, Sriracha Honey, Pesto, Creamy Garlic Butter</p>
		</div> 
		<div className="col-lg-5 col-md-5 pb-5 ">
		 <h4 ><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}GARNISHES</h4>  
		 
			<p className="light-grey">Chiffonade Basil, Chopped Chives</p>
		</div>
		
	</div>
 
	<div className="row justify-content-center text-center">
		<div className="col-lg-10 col-md-10 pb-5 ">
			<h4><img alt="wood fired pizza peel" src={Peel} /> {'\u00A0'}TOPPINGS</h4>
	 
		<p className="light-grey">Artichoke Hearts, Banana Peppers, Chive Mashed Potatoes, Diced Black Olives, Doubled Baked Mac & Cheese, Green Peppers, Mandarin Oranges, Pickled Jalapenos, Oven Roasted Tomatoes, Red Onions, Roasted Eggplant, Roma Tomatoes, Sautéed Garlic Herb Mushrooms, Spinach</p>
		</div>
	</div>






	 

		<div className="row justify-content-center text-center">
		<div className="col-lg-10 col-md-10 mb-5 pt-5  ">
			<h5 className="text-uppercase">Package Includes</h5>
			<hr className="hr-style-grey" />

			 

		 {/*
		<p className="light-grey">
			<span className="txt-orange txt-med">WOOD FIRED PEPPERONI BREADS</span>
	 <br/>One of a kind handcrafted wood fired pepperoni breads that are rolled to perfection finished off with a garlic drizzle and romano cheese sprinkle</p>
		<p className="light-grey">
			<span className="txt-orange txt-med">MIXED GREENS SALAD</span>
	 <br/>
		Mixed green blend, sliced cucumbers, sliced red onions, cherry tomatoes, topped with a Caesar blend cheese and your choice of balsamic vinaigrette dressing or our house Italian dressing</p>  

	*/}
		</div>
	</div>

		<div className="row justify-content-center">
<div className="col-lg-5 col-md-5 p-4 " >	
<p className="txt-light"><strong className="txt-orange">
WOOD FIRED PEPPERONI BREADS: </strong>One of a kind handcrafted wood fired pepperoni breads that are rolled to perfection then finished off with a garlic drizzle and Romano cheese sprinkle
</p>
</div>
<div className="col-lg-5 col-md-5 p-4 " >	
<p  className="txt-light"><strong className="txt-orange">MIXED GREENS SALAD: </strong>Mixed green blend, sliced cucumbers, sliced red onions, cherry tomatoes, topped with our house blend cheese and your choice of balsamic vinaigrette dressing or our house Italian dressing</p></div>
</div>





	<div className="row justify-content-center">
<div className="col-lg-5 col-md-5 p-4 " >	
<p className="txt-light"><strong className="txt-orange">EVERY EVENT INCLUDES: </strong>
Our wood fired pizza display, handcrafted pepperoni breads and our mixed greens salad. Durable plates, napkins and silverware.
</p>
</div>
<div className="col-lg-5 col-md-5 p-4 " >	
<p  className="txt-light"><strong className="txt-orange">DIETARY ACCOMODATIONS: </strong>
We understand that planning an event for this many guest comes with dietary restrictions. We can accommodate to most dietary restrictions. Have a special request feel free to ask us.</p></div>
</div>

	</div>
</div>

 
</div>

 

export default MenuPage;