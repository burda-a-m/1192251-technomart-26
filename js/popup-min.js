var overlay=document.querySelector(".overlay"),popup_arr=document.querySelectorAll(".popup"),link_map=document.querySelector(".link-map"),popup_map=document.querySelector(".popup-map");link_map&&popup_map&&link_map.addEventListener("click",function(a){a.preventDefault();overlay.classList.add("show");popup_map.classList.add("popup-show")});var popup_basket=document.querySelector(".popup-basket"),buttons_buy_arr=document.querySelectorAll(".btn-buy");
if(popup_basket&&buttons_buy_arr)for(var i=0;i<buttons_buy_arr.length;i++)buttons_buy_arr[i].addEventListener("click",function(a){a.preventDefault();overlay.classList.add("show");popup_basket.classList.add("popup-show")});
var btn_feedback=document.querySelector(".btn-feedback"),popup_feedback=document.querySelector(".popup-feedback"),form=document.querySelector(".form-feedback"),field_name=document.querySelector("[name=your-name]"),field_email=document.querySelector("[name=email]"),field_message=document.querySelector("[name=message]"),isStorageName=!0,isStorageEmail=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("field_name")}catch(a){isStorageName=!1}
try{storageEmail=localStorage.getItem("field_email")}catch(a){isStorageEmail=!1}
btn_feedback&&popup_feedback&&(btn_feedback.addEventListener("click",function(a){a.preventDefault();overlay.classList.add("show");popup_feedback.classList.add("popup-show");storageName&&(field_name.value=storageName);storageEmail&&(field_email.value=storageEmail);field_name.focus();field_name.select()}),form.addEventListener("submit",function(a){field_name.value&&field_email.value&&field_message.value?(isStorageName&&localStorage.setItem("field_name",field_name.value),isStorageEmail&&localStorage.setItem("field_email",
field_email.value)):(a.preventDefault(),field_name.value?field_email.value?field_message.value||field_message.focus():field_email.focus():field_name.focus(),popup_feedback.classList.remove("popup-error"),popup_feedback.classList.add("popup-error"))}));function popup_close(a){a.preventDefault();for(a=0;a<popup_arr.length;a++){var b=popup_arr[a];overlay.classList.remove("show");b.classList.remove("popup-show");b.classList.remove("popup-error")}}var button_close_arr=document.querySelectorAll(".btn-popup-close");
for(i=0;i<button_close_arr.length;i++){var button=button_close_arr[i];button.addEventListener("click",popup_close)}overlay.addEventListener("click",popup_close);window.addEventListener("keydown",function(a){27===a.keyCode&&popup_close(a)});var slider_check_arr=document.querySelectorAll(".slider > input[type=radio]"),arrow_left=document.querySelector(".slider > .arrow-left"),arrow_right=document.querySelector(".slider > .arrow-right");
function slide_active_number(){for(var a=0;a<slider_check_arr.length&&!slider_check_arr[a].checked;)a++;return a+1}function activate_slide_radiobutton(a){document.querySelector("#slider-check-"+a).checked=!0}
if(slider_check_arr&&arrow_left&&arrow_right){var new_number;arrow_left.addEventListener("click",function(){var a=slide_active_number();new_number=1<a?a-1:slider_check_arr.length;activate_slide_radiobutton(new_number)});arrow_right.addEventListener("click",function(){var a=slide_active_number();new_number=a<slider_check_arr.length?a+1:1;activate_slide_radiobutton(new_number)})};