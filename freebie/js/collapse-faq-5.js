let answer5 = document.getElementById("answer-5");
let plus5 = document.getElementById("plus-5"); 
let minus5 = document.getElementById("minus-5");

function openCollapseFaq5() {
    if (plus5.click) {
        plus5.classList.add("close");
        plus5.classList.remove("open");

        minus5.classList.add("open");
        minus5.classList.remove("close");

        answer5.classList.add("open-answer");
    }
}

function closeCollapseFaq5() {
    if (minus5.click) {
        minus5.classList.add("close");
        minus5.classList.remove("open");

        plus5.classList.add("open");
        plus5.classList.remove("close");

        answer5.classList.remove("open-answer");
    }
}