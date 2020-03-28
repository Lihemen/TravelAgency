const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
	indicators: false,
	height: 500,
	transition: 500,
	interval: 6000
});

const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

const ss = document.querySelectorAll(".scrollspy");
M.Scrollspy.init(ss, {});

const button = document.getElementById("submit-btn");
button.addEventListener("click", event => {
	event.target;
});
