"use strict";$(document).ready(function(){$(".popular_carusel").slick({dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:'<button class="carusel_pagination carusel_pagination--next"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999997 17L9 9L1 0.999999" stroke="white" stroke-width="2"/></svg></button>',prevArrow:'<button class="carusel_pagination carusel_pagination--prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 9L10 17" stroke="white" stroke-width="2"/></svg></button>',dotsClass:"carusel_dots",responsive:[{breakpoint:990,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(){$(".works_carusel").slick({dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,nextArrow:'<button class="carusel_pagination carusel_pagination--next"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999997 17L9 9L1 0.999999" stroke="white" stroke-width="2"/></svg></button>',prevArrow:'<button class="carusel_pagination carusel_pagination--prev"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 9L10 17" stroke="white" stroke-width="2"/></svg></button>',dotsClass:"carusel_dots",responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})});var burger=document.body.querySelector(".header_burger"),menu=document.body.querySelector(".header_menu");burger.addEventListener("click",function(e){e.preventDefault(),menu.classList.toggle("active"),burger.classList.toggle("open")});var isAllValidData=document.body.querySelectorAll(".isAllValidData"),changeFlagHandler=function(e,t){Array.from(e).every(function(e){return e.classList.contains("valid")})?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled")};isAllValidData.forEach(function(e){var t=e.querySelectorAll(".isValidData"),o=e.querySelector(".isDisableButton");o&&e.addEventListener("keyup",function(){return changeFlagHandler(t,o)})});var isValidInput=document.body.querySelectorAll(".isValidInput");isValidInput.forEach(function(e){e.addEventListener("input",function(){e.checkValidity()?e.classList.add("valid"):e.classList.remove("valid")})});var phoneInputs=document.body.querySelectorAll(".telmask");$(function(){$(".telmask").inputmask({clearIncomplete:!0,showMaskOnHover:!1,mask:"+375 (99) 999-99-99"})}),phoneInputs.forEach(function(o){var s=o.parentElement.querySelector(".valid-error--phone");o.addEventListener("keyup",function(){var e=o.value.replace(/[^\d]/g,"");if(12===e.length){var t=e.substring(3,5);["33","29","44","25"].some(function(e){return e===t})?(o.classList.add("valid"),o.classList.remove("invalid"),s.textContent=""):(o.classList.remove("valid"),o.classList.add("invalid"),s.textContent="* Пожалуйста введите корректный код мобильного оператора")}else o.classList.remove("valid"),o.classList.remove("invalid"),s.textContent=""})});var openModalConsultationButtons=document.body.querySelectorAll(".openModal"),modal=document.body.querySelector(".modal"),closeModalButton=modal.querySelector(".modal_close"),closeModalHandler=function e(t){t.preventDefault(),modal.classList.remove("active"),closeModalButton.removeEventListener("click",e),document.body.removeEventListener("keyup",escKeyupHandler)},escKeyupHandler=function e(t){"Escape"===t.key&&(modal.classList.remove("active"),closeModalButton.removeEventListener("click",closeModalHandler),document.body.removeEventListener("keyup",e))};openModalConsultationButtons.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("active"),closeModalButton.addEventListener("click",closeModalHandler),document.body.addEventListener("keyup",escKeyupHandler)})});var customSelects=document.body.querySelectorAll(".customSelect");customSelects.forEach(function(o){var s=o.querySelector(".customSelectValue"),n=function e(t){t.target.classList.contains("customSelectValue")||t.target.classList.contains("customSelectOption")||(o.classList.remove("open"),document.body.removeEventListener("click",e))};o.addEventListener("click",function(e){if(e.target.classList.contains("customSelectValue")&&(o.classList.toggle("open"),document.body.addEventListener("click",n)),e.target.classList.contains("customSelectOption")){var t=e.target.innerText;s.textContent=t,o.classList.remove("open")}})});