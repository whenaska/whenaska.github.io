let displayFormula = document.getElementById("result");
function updateText() {    
    lengthUnsStr = unsortString.length;
    if (lengthUnsStr == 0) {
        displayFormula.innerHTML = "Введите выражение";
    }
    else {
        displayFormula.innerHTML = unsortString;
    }
}