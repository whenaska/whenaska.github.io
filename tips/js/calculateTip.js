let moneyFromEach;

function calculateTip(){
    let total = document.getElementById("bill").value;
    let numGuests = document.getElementById("guests").value;
    let percTip = document.getElementById("percentTips").value;

    moneyFromEach = (total / numGuests * percTip / 100);
    moneyFromEach = +moneyFromEach.toFixed(2);

    changePopup();
}
