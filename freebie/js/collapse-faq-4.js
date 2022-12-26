let answer4 = document.getElementById("answer-4");
let plus4 = document.getElementById("plus-4"); 
let minus4 = document.getElementById("minus-4");

function openCollapseFaq4() {
    if (plus4.click) {
        plus4.classList.add("close");
        plus4.classList.remove("open");

        minus4.classList.add("open");
        minus4.classList.remove("close");

        answer4.classList.add("open-answer");
    }
}

function closeCollapseFaq4() {
    if (minus4.click) {
        minus4.classList.add("close");
        minus4.classList.remove("open");

        plus4.classList.add("open");
        plus4.classList.remove("close");

        answer4.classList.remove("open-answer");
    }
}