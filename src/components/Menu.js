import React from 'react';
import Peel from '../images/peel-black.png';

const MenuPage = () =>
  <div className="content-section">
  		<div className="content-container">
    <h1 className="pb-5 pt-5">Menu</h1>


<div className="container-fluid ">
<div className="row justify-content-center ">
		<div className="col-sm-5 mb-5 p-3 content-info-border">
			<h4><u>Wood-Fired Pizza Display</u></h4>
	 
		<span>$15 per person</span><br/>
		<span>Unlimited Pizza / 2 hours of service</span>
		</div>
	</div>
	<div className="">
	<div className="row justify-content-around ">
		<div className="col-sm-4 pb-5">
			<h4><img src={Peel} />{'\u00A0'}MEATS</h4>
			<p>Pepperoni, Sausage, Bacon, Ham, Chicken</p>
		</div>
		<div className="col-sm-4 pb-5">
			<h4><img src={Peel} /> {'\u00A0'}GARNISHES</h4>
			<p>Chives, Cilantro, Basil</p>
		</div> 
	</div>
 
	<div className="row justify-content-around ">
		<div className="col-sm-4 pb-5 ">
		 <h4 ><img src={Peel} />{'\u00A0'}CHEESE</h4>  
		 
			<p >Blue Cheese, Cheddar, Feta, Goat Cheese, Provolone/Mozzarella, Parmesan, Mozzarella </p>
		</div>
		<div className="col-sm-4 pb-5 ">
			<h4><img src={Peel} />{'\u00A0'}SAUCES</h4>
			<p>Sicilian Pizza Sauce, BBQ, Buffalo, Sriracha Honey, Oil & Garlic, Buttered Garlic, Pesto</p>
		</div> 
	</div>
 
	<div className="row justify-content-center ">
		<div className="col-sm-6 pb-5">
			<h4><img src={Peel} />{'\u00A0'}TOPPINGS</h4>
	 
		<p>Tomatoes, Oven Roasted Tomatoes, Onion, Green Peppers, Jalapeños, Eggplant, Zucchini, Squash, Asparagus, Mushrooms, Black Olives, Spinach, Artichokes, Potatoes, Mandarin Oranges</p>
		</div>
	</div>
	</div>

		<div className="row justify-content-center ">
		<div className="col-sm-6 mb-5 content-info-box">
			<h4><u>What Our Display Includes</u></h4>
	 
		<p>Over 15 types of wood-fired pizza's, hand crafted pepperoni bread and house salad</p>
		</div>
	</div>

	</div>

</div>
</div>

export default MenuPage;