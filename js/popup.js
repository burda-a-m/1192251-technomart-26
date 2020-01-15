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
        buttons_buy_arr[i].addEventListener("click", function (evt) {
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

    if ((btn_feedback)&&(popup_feedback)) {
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
          popup_feedback.classList.remove("popup-error");
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

      for (var i = 0; i < popup_arr.length; i++) {
        var popup = popup_arr[i];
        overlay.classList.remove("show");
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
    // /-


    // Вешаю функцию popup_close на щелчок по "крестику" (кнопка закрытия popup-окна)

    // Массив из "крестиков" (кнопок закрытия popup-окон)
    var button_close_arr = document.querySelectorAll(".btn-popup-close");

    for (var i = 0; i < button_close_arr.length; i++) {
      var button = button_close_arr[i];
      button.addEventListener("click", popup_close);
    }
    // /-


    // Вешаю функцию popup_close на щелчок по оверлею (Области вне popup-окна)
    overlay.addEventListener("click", popup_close);
    // /-


    // Вешаю функцию popup_close на нажатие клавиши Esc
    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        popup_close(evt);
      }
    });
    // /-





/*
 *  Оживляю "ушки" слайдера
 */

    // массив радиокнопок для переключателей
    var slider_check_arr = document.querySelectorAll(".slider > input[type=radio]");

    // "Ушки" (левое и правое соответственно)
    var arrow_left = document.querySelector(".slider > .arrow-left");
    var arrow_right = document.querySelector(".slider > .arrow-right");

    // Функция, вычисляющая номер активного слайда, а он должен быть обязательно
    function slide_active_number() {
      var i = 0;
      while ( (i < slider_check_arr.length) && (!slider_check_arr[i].checked) ) {
        i++;
      }
          // i вычисленно, но оно на единицу меньше, т.к. ииндексы массивов начинаются с нуля.
          // Поэтому функции передаю значение на единицу больше
      return (i+1);
    }
    // /-

    // Функция-процедура, активирующая нужную радиокнопку в слайдере
    function activate_slide_radiobutton(number) {
      var radiobutton_id = "#slider-check-" + number;
      var radiobutton = document.querySelector(radiobutton_id);
      radiobutton.checked = true;
    }

    if (slider_check_arr && arrow_left && arrow_right) {
      // В эту переменную запишу номер слайда, к которому надо перейти
      var new_number;

      // Вешаю событие на левое "ушко"
      arrow_left.addEventListener("click", function() {
        var active_number = slide_active_number();
        if ( active_number > 1 ) {
          new_number = active_number - 1;
        } else {
          new_number = slider_check_arr.length;
        }
        activate_slide_radiobutton(new_number);
      });

      // Вешаю событие на правое "ушко"
      arrow_right.addEventListener("click", function() {
        var active_number = slide_active_number();
        if ( active_number < slider_check_arr.length) {
          new_number = active_number + 1;
        } else {
          new_number = 1;
        }
        activate_slide_radiobutton(new_number);
      });
    }