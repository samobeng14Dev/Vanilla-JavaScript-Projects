const slideEl = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slideEl.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});

// control slides(shown/hidden)

let counter = 0;
nextBtn.addEventListener("click", () => {
	counter++;
	carousel();
});
prevBtn.addEventListener("click", () => {
	counter--;
	carousel();
});

// move the slide

const carousel = () => {
	// working with counter
	if (counter == slideEl.length) {
		counter = 0;
	}
	if (counter < 0) {
		counter = slideEl.length - 1;
	}
	slideEl.forEach((slide) => {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
};
