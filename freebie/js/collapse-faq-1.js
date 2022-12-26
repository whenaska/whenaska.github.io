let answer1 = document.getElementById("answer-1");
let plus1 = document.getElementById("plus-1"); 
let minus1 = document.getElementById("minus-1");

function openCollapseFaq1() {
    if (plus1.click) {
        plus1.classList.add("close");
        plus1.classList.remove("open");

        minus1.classList.add("open");
        minus1.classList.remove("close");

        answer1.classList.add("open-answer");
    }
}

function closeCollapseFaq1() {
    if (minus1.click) {
        minus1.classList.add("close");
        minus1.classList.remove("open");

        plus1.classList.add("open");
        plus1.classList.remove("close");

        answer1.classList.remove("open-answer");
    }
}
