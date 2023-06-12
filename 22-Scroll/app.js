// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const dateEl = document.getElementById("date");
dateEl.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggleEl = document.querySelector(".nav-toggle");
const linksContainerEl = document.querySelector(".links-container");
const linksEl = document.querySelector(".links");

navToggleEl.addEventListener("click", () => {
	// linksContainerEl.classList.toggle("show-links");
	const containerHight = linksContainerEl.getBoundingClientRect().height;
	const linksHeight = linksEl.getBoundingClientRect().height;

	if (containerHight == 0) {
		linksContainerEl.style.height = `${linksHeight}px`;
	} else {
		linksContainerEl.style.height = 0;
	}
});
// ********** fixed navbar ************
const navbarEl = document.getElementById("nav");
const topLinkEl = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;
	const navbarHeight = navbarEl.getBoundingClientRect().height;
	if (scrollHeight > navbarHeight) {
		navbarEl.classList.add("fixed-nav");
	} else {
		navbarEl.classList.remove("fixed-nav");
	}

	if (scrollHeight > 500) {
		topLinkEl.classList.add("show-link");
	} else {
		topLinkEl.classList.remove("show-link");
	}
});

// ********** smooth scroll ************
// select links
const scrollLinksEl = document.querySelectorAll(".scroll-link");

scrollLinksEl.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		//navigate to a specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		//calculate height
		const navHeight = navbarEl.getBoundingClientRect().height;
		const containerHight = linksContainerEl.getBoundingClientRect().height;
		const fixedNav = navbarEl.classList.contains(".fixed-nav");

		let position = element.offsetTop - navHeight;

		if (!fixedNav) {
			position = position - navHeight;
		}
		//smaller screen
		if (navHeight > 82) {
			position = position + containerHight;
		}
		window.scrollTo({
			left: 0,
			top: position,
		});
		//close little toggle navbar in smaller  screen
		linksContainerEl.style.height = 0;
	});
});
