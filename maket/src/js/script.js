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