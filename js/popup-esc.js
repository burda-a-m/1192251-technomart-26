// По щелчку по Esc закрываю все окна

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode===27) {
		var popup_arr = document.querySelectorAll(".popup");

		var popup, i;
		for (i = 0; i < popup_arr.length; i++) {
		  popup = popup_arr[i];
		  popup.classList.remove("popup-show");
		}
	}
});