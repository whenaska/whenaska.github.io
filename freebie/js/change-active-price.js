let planMonthly = document.getElementById("plan-monthly-subscribe");
let planAnnualy = document.getElementById("plan-annualy-subscribe");

function makeActiveMonthly() {
    if(     planMonthly.click 
        ||  monthlyBtn.click
        || planMonthly.addEventListener("mouseover")) {
        settingsActiveMonthly();
        translateLeft();
    }
}

function makeActiveAnnualy() {
    if(     planAnnualy.click 
        ||  annualyBtn.click
        || planAnnualy.addEventListener("mouseover")) {
        settingsActiveAnnualy();
        translateRight();
    }
}