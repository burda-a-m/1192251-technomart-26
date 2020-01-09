var btn_feedback = document.querySelector(".btn-feedback");

var popup_feedback = document.querySelector(".popup-feedback");
var overlay_feedback = document.querySelector(".popup-feedback .popup-overlay");
var close_feedback = popup_feedback.querySelector(".btn-popup-close");

btn_feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_feedback.classList.add("popup-show");
});

close_feedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_feedback.classList.remove("popup-show");
});

overlay_feedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_feedback.classList.remove("popup-show");
});