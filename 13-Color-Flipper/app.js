const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	colorEl.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};
