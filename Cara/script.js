
document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector("#hamburger");
	const navbarMenu = document.querySelector("#navbar");

	hamburger.addEventListener("click", () => {
		navbarMenu.classList.toggle("active");
		hamburger.classList.toggle("active");
	});

	document.querySelectorAll(".nav-item").forEach((navItem) => {
		navItem.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navbarMenu.classList.remove("active");
		});
	});
});


// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Script for image change on click
	const MainImg = document.getElementById("MainImg"); // Get the main image element
	const smallimg = document.getElementsByClassName("small-img"); // Get all the small image elements

	// When the first small image is clicked, change the source of the main image to the source of the clicked image
	smallimg[0].onclick = function () {
		MainImg.src = smallimg[0].src;
	};
	// Do the same for the rest of the small images
	smallimg[1].onclick = function () {
		MainImg.src = smallimg[1].src;
	};
	smallimg[2].onclick = function () {
		MainImg.src = smallimg[2].src;
	};
	smallimg[3].onclick = function () {
		MainImg.src = smallimg[3].src;
	};
});
