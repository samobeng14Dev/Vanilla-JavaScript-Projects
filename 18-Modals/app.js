// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtnEl = document.querySelector(".modal-btn");
const modalOverlayEl = document.querySelector(".modal-overlay");
const closeBtnEl = document.querySelector(".close-btn");

const openModal = () => {
	modalOverlayEl.classList.add("open-modal");
};

const closeModal = () => {
	modalOverlayEl.classList.remove("open-modal");
};

modalBtnEl.addEventListener("click", openModal);
closeBtnEl.addEventListener("click", closeModal);
