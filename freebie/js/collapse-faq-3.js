let answer3 = document.getElementById("answer-3");
let plus3 = document.getElementById("plus-3"); 
let minus3 = document.getElementById("minus-3");

function openCollapseFaq3() {
    if (plus3.click) {
        plus3.classList.add("close");
        plus3.classList.remove("open");

        minus3.classList.add("open");
        minus3.classList.remove("close");

        answer3.classList.add("open-answer");
    }
}

function closeCollapseFaq3() {
    if (minus3.click) {
        minus3.classList.add("close");
        minus3.classList.remove("open");

        plus3.classList.add("open");
        plus3.classList.remove("close");

        answer3.classList.remove("open-answer");
    }
}