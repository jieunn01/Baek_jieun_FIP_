(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burgerCon");


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}
	
	button.addEventListener("click", hamburgerMenu, false);

	let planSelectorNav = document.querySelectorAll("#planSelector li");
	let membershipPlans = document.querySelectorAll(".membershipPlans");



})();