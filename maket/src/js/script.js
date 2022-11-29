let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
});

let Popup_request = document.getElementById("popup-request");
let Dark_bg = document.getElementById("dark-bg");

function F_check_popup_request() {
    if((document.getElementById("btn-open-popup-request-1").click)||
    (document.getElementById("btn-open-popup-request-2").click)||
    (document.getElementById("btn-open-popup-request-3").click)||
    (document.getElementById("btn-open-popup-request-4").click)){

        Popup_request.classList.add("Open");
        Dark_bg.classList.add("Active");
    }
}

function closePopup_request() {
    Popup_request.classList.remove("Open");
    Dark_bg.classList.remove("Active");
}

let Popup_price_table_1 = document.getElementById("popup-first-table");

function F_check_popup_price_table_1() {
    if(document.getElementById("btn-open-popup-price-table-1").click){

        Popup_price_table_1.classList.add("Open");
        Dark_bg.classList.add("Active");
    }
}

function closePopup_price_table_1() {
    Popup_price_table_1.classList.remove("Open");
    Dark_bg.classList.remove("Active");
}

let Popup_price_table_2 = document.getElementById("popup-second-table");

function F_check_popup_price_table_2() {
    if(document.getElementById("btn-open-popup-price-table-2").click){

        Popup_price_table_2.classList.add("Open");
        Dark_bg.classList.add("Active");
    }
}

function closePopup_price_table_2() {
    Popup_price_table_2.classList.remove("Open");
    Dark_bg.classList.remove("Active");
}

let Popup_price_table_3 = document.getElementById("popup-third-table");

function F_check_popup_price_table_3() {
    if(document.getElementById("btn-open-popup-price-table-3").click){

        Popup_price_table_3.classList.add("Open");
        Dark_bg.classList.add("Active");
    }
}

function closePopup_price_table_3() {
    Popup_price_table_3.classList.remove("Open");
    Dark_bg.classList.remove("Active");
}