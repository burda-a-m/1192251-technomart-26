// Массив кнопок "Купить" в карточках товаров
var buttons_arr = document.querySelectorAll(".btn-buy");

var popup_basket = document.querySelector(".popup-basket");
var overlay_basket = document.querySelector(".popup-basket .popup-overlay");
var close_basket = popup_basket.querySelector(".btn-popup-close");

// Вешаю кнопкам "Купить" событие btnBuy_click, открывающее popup-окно
// с уведомлением о добавлении товара в корзину
var button, i;
for (i = 0; i < buttons_arr.length; i++) {
  button = buttons_arr[i];
  button.addEventListener('click', btnBuy_click);
}

function btnBuy_click(evt) {
  evt.preventDefault();
  popup_basket.classList.add("popup-show");
}
// /-

close_basket.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_basket.classList.remove("popup-show");
});

overlay_basket.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup_basket.classList.remove("popup-show");
});
