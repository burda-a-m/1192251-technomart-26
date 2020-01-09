var link_map = document.querySelector(".link-map");
var popup_map = document.querySelector(".popup-map");
var overlay_map = document.querySelector(".popup-map .popup-overlay");
var close_map = popup_map.querySelector(".btn-popup-close");

link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("popup-show");
});

close_map.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_map.classList.remove("popup-show");
});

overlay_map.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_map.classList.remove("popup-show");
});