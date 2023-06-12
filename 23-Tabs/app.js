const btnEl = document.querySelectorAll(".tab-btn");
const aboutBtnEl = document.querySelector(".about");
const articlesEl = document.querySelectorAll(".content");

aboutBtnEl.addEventListener("click", (e) => {
	const id = e.target.dataset.id;
	//if we are clicking on a button
	if (id) {
		// remove active from other buttons
		btnEl.forEach((btn) => {
			btn.classList.remove("active");
			e.target.classList.add("active");
		});

		// hide all articles
		articlesEl.forEach((article) => {
			article.classList.remove("active");
		});
		// display articles with matching id
		const element = document.getElementById(id);
		element.classList.add("active");
	}
});
