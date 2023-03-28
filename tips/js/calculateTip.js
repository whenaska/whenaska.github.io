let moneyFromEach;

function calculateTip(){
    let total = +document.getElementById("bill").value;
    let numGuests = +document.getElementById("guests").value;
    let percTip = +document.getElementById("percentTips").value;

    moneyFromEach = (total + total * percTip / 100) / numGuests;
    moneyFromEach = +moneyFromEach.toFixed(2);

    changePopup();
}
