//using selectors inside the element
const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((question) => {
	const btnEl = question.querySelector(".question-btn");

	btnEl.addEventListener("click", () => {
		//close previous button when the current button is clicked
		questionsEl.forEach((item) => {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});
		question.classList.toggle("show-text");
	});
});
// traversing the dom

// const questionBtnEl = document.querySelectorAll(".question-btn");

// questionBtnEl.forEach((btn) => {
// 	btn.addEventListener("click", (e) => {
// 		const questions = e.currentTarget.parentElement.parentElement;
// 		questions.classList.toggle("show-text");
// 	});
// });
