let answer2 = document.getElementById("answer-2");
let plus2 = document.getElementById("plus-2"); 
let minus2 = document.getElementById("minus-2");

function openCollapseFaq2() {
    if (plus2.click) {
        plus2.classList.add("close");
        plus2.classList.remove("open");

        minus2.classList.add("open");
        minus2.classList.remove("close");

        answer2.classList.add("open-answer");
    }
}

function closeCollapseFaq2() {
    if (minus2.click) {
        minus2.classList.add("close");
        minus2.classList.remove("open");

        plus2.classList.add("open");
        plus2.classList.remove("close");

        answer2.classList.remove("open-answer");
    }
}