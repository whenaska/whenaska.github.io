let Popup_yes = document.getElementById("Popup_yes");
let Popup_no = document.getElementById("Popup_no");

function F_check_yes() {
    if(document.getElementById("Yes").click) {
        Popup_yes.classList.add("Open");
    }
}
function closePopup_yes() {
    Popup_yes.classList.remove("Open");
}

function F_check_no() {
    if(document.getElementById("No").click) {
        Popup_no.classList.add("Open");
    }
}
function closePopup_no() {
    Popup_no.classList.remove("Open");
}