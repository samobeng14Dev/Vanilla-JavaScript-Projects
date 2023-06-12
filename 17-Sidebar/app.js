const toggleBtnEl = document.querySelector(".sidebar-toggle");
const closeBtnEl = document.querySelector(".close-btn");
const sidebarEl = document.querySelector(".sidebar");

toggleBtnEl.addEventListener("click", () => {
	sidebarEl.classList.toggle("show-sidebar");
});

closeBtnEl.addEventListener("click", () => {
	sidebarEl.classList.remove("show-sidebar");
});
