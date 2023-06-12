// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleEl = document.querySelector(".nav-toggle");
const linksEl = document.querySelector(".links");

navToggleEl.addEventListener("click", () => {
	// if (linksEl.classList.contains("show-links")) {
	// 	linksEl.classList.remove("show-links");
	// } else {
	// 	linksEl.classList.add("show-links");
	// }
	linksEl.classList.toggle("show-links");
});
