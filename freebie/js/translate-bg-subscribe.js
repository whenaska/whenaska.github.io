let monthlyBtn = document.getElementById("monthly-subscribe");
let annualyBtn = document.getElementById("annualy-subscribe");
let figure = document.getElementById("bigure-bg-subscribe");

function translateLeft() {
    if (monthlyBtn.click) {
        figure.style.transform = "translateX(0%)";
        settingsActiveMonthly()
    }
}
function translateRight() {
    if (annualyBtn.click) {
        figure.style.transform = "translateX(100%)";
        settingsActiveAnnualy()
    }
}