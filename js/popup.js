/*
 * Глобальные переменные для всех popup-окон
 */

    var overlay = document.querySelector(".overlay");

    // массив из popup-окон
    var popup_arr = document.querySelectorAll(".popup");


/*
 * Открываем popup-окна
 */

    // Открываем popup-окно с картой
    var link_map = document.querySelector(".link-map");
    var popup_map = document.querySelector(".popup-map");

    if ((link_map)&&(popup_map)) {
      link_map.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("show");
        popup_map.classList.add("popup-show");
      });
    }
    // /-


    // Вешаю кнопкам "Купить" событие click, открывающее popup-окно
    // с уведомлением о добавлении товара в корзину
    var popup_basket = document.querySelector(".popup-basket");

    // Массив кнопок "Купить" в карточках товаров
    var buttons_buy_arr = document.querySelectorAll(".btn-buy");

    if ((popup_basket)&&(buttons_buy_arr)) {
      for (var i = 0; i < buttons_buy_arr.length; i++) {
        buttons_buy_arr[i].addEventListener('click', function (evt) {
          evt.preventDefault();
          overlay.classList.add("show");
          popup_basket.classList.add("popup-show");
        });
      }
    }
    // /-


    // Открываем popup-окно с формой обратной связи и обрабатываем введенне данные
    var btn_feedback = document.querySelector(".btn-feedback");
    var popup_feedback = document.querySelector(".popup-feedback");

    var form = document.querySelector(".form-feedback");
    var field_name = document.querySelector("[name=your-name]");
    var field_email = document.querySelector("[name=email]");
    var field_message = document.querySelector("[name=message]");

    var isStorageName = true;
    var isStorageEmail = true;
    var storageName = "";
    var storageEmail = "";

    try {
      storageName = localStorage.getItem("field_name");
    } catch (err) {
      isStorageName = false;
    }

    try {
      storageEmail = localStorage.getItem("field_email");
    } catch (err) {
      isStorageEmail = false;
    }

    if ((btn_feedback)&&(btn_feedback)) {
      // Открываем popup-окно с формой обратной связи
      btn_feedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("show");
        popup_feedback.classList.add("popup-show");
        if (storageName) {
          field_name.value = storageName;
        }
        if (storageEmail) {
          field_email.value = storageEmail;
        }
        field_name.focus();
        field_name.select();
      });

      // Обработка формы обратной связи при щелчке по кнопке "Отправить"
      form.addEventListener("submit", function (evt) {
        popup_feedback.classList.remove("popup-error");
        if ( (!field_name.value) ||
              (!field_email.value) ||
              (!field_message.value)
            ) {
          // Если одно из полей не заполнено, отменяем стандартное действие кнопки submit и
          // ищем, какое именно из полей не заполнено. Ему и передаем фокус и трясем форму
          evt.preventDefault();
          if (!field_name.value) {
            field_name.focus();
          } else if (!field_email.value) {
            field_email.focus();
          } else if (!field_message.value) {
            field_message.focus();
          }
          popup_feedback.classList.add("popup-error");
        } else {
          // Все поля заполнены. Сохраним их значения в локальное хранилище
          if (isStorageName) {
            localStorage.setItem("field_name", field_name.value);
          }
          if (isStorageEmail) {
            localStorage.setItem("field_email", field_email.value);
          }
        }
      });
    }
    



/*
 * Закрытие popup-окон
 */

    // Функция закрытия всех popup-окон
    function popup_close(evt) {
      evt.preventDefault();

      var popup, i;

      for (i = 0; i < popup_arr.length; i++) {
        popup = popup_arr[i];
        overlay.classList.remove("show");
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
    // /-


    // Вешаю функцию popup_close на щелчок по "крестику" (кнопка закрытия popup-окна)

    // Массив из "крестиков" (кнопок закрытия popup-окон)
    var button_close_arr = document.querySelectorAll(".btn-popup-close");

    var button_close, i;
    
    for (i = 0; i < button_close_arr.length; i++) {
      button = button_close_arr[i];
      button.addEventListener('click', popup_close);
    }
    // /-


    // Вешаю функцию popup_close на щелчок по оверлею (Области вне popup-окна)
    overlay.addEventListener('click', popup_close);
    // /-


    // Вешаю функцию popup_close на нажатие клавиши Esc
    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode===27) {
        popup_close(evt);
      }
    });
    // /-