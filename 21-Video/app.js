// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btnEl = document.querySelector(".switch-btn");
const videoEl = document.querySelector(".video-container");

btnEl.addEventListener("click", () => {
	if (!btnEl.classList.contains("slide")) {
		btnEl.classList.add("slide");
		videoEl.pause();
	} else {
		btnEl.classList.remove("slide");
		videoEl.play();
	}
});

//preloader

const preloaderEl = document.querySelector(".preloader");

window.addEventListener("load", () => {
	preloaderEl.classList.add("hide-preloader");
});
