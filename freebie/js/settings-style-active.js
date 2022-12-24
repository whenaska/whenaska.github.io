function settingsActiveMonthly() {
    monthlyBtn.style.color = "#ffffff";
    annualyBtn.style.color = "#616368";
    planMonthly.classList.add("active");
    planAnnualy.classList.remove("active");
}

function settingsActiveAnnualy() {
    annualyBtn.style.color = "#ffffff";
    monthlyBtn.style.color = "#616368";
    planAnnualy.classList.add("active");
    planMonthly.classList.remove("active");
}