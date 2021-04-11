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

	const submitBtn = document.querySelector('#submit-btn'),
		form = document.querySelector('.submit-form');

	if (submitBtn) {
	  submitBtn.addEventListener('click', () => {
	     form.submit()
	  })
	}

})();

const overlay = document.querySelector('.Up-layer');
const hotspotZone = document.querySelector('.Hsection');

const points = [
  {
    x: '180px',
    y: '120px',
    data: 'Some know-it-alls will tell you that beer is loaded with additives and preservatives. The truth is that beer is as all-natural as orange juice or milk. Beer does not need preservatives because it has alcohol and hops, both of which are natural preservatives. Beer is only "processed" in the sense that bread is: It is cooked and fermented, then filtered and packaged. '
  },
  {
    x: '460px',
    y: '280px',
    data: 'Beer, especially unfiltered or lightly filtered beer, turns out to be quite nutritious, despite the years of suppression of those facts by various anti-alcohol groups. Beer has high levels of B vitamins, particularly folic acid, which is believed to help prevent heart attacks. Beer also has soluble fiber, good for keeping you regular, which in turn reduces the likelihood that your system will absorb unhealthy junk like fat. Beer also boasts significant levels of magnesium and potassium.'
  },
  {
    x: '70px',
    y: '350px',
    data: 'For a completely natural beverage, beer offers serious low-calorie options. Twelve ounces of Guinness has the same number of calories as 12 ounces of skim milk: about 125. That is less than orange juice (150 calories), which is about the same as your standard, "full-calorie" beer. If beer were your only source of nutrition, you would have to drink one every waking hour just to reach your recommended daily allowance of calories (2,000 to 2,500). And nobody is recommending you drink that many. The only natural drinks with fewer calories than beer are plain tea, black coffee and water. '
  },
];

points.forEach((spot) => {
  
  let img = document.createElement('img'); 

  img.style.left = spot.x;
  img.style.top = spot.y;
  img.title = spot.data;
  img.className= 'showing';
  img.src="images/Hbutton.png"
  overlay.appendChild(img);
  img.data = spot.data;
  img.addEventListener('mouseenter', handleMouseEnter);
  img.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseEnter(event) {
  hotspotZone.innerHTML = event.currentTarget.data;
}


function handleMouseLeave(event) {
  hotspotZone.innerHTML = '&nbsp;';
}


