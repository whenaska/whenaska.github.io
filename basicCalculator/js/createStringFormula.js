function addZero() {
    unsortString += "0";
    cntActs = 0;
    updateText();
}
function addOne() {
    unsortString += "1";
    cntActs = 0;
    updateText();
}
function addTwo() {
    unsortString += "2";
    cntActs = 0;
    updateText();
}
function addThree() {
    unsortString += "3";
    cntActs = 0;
    updateText();
}
function addFour() {
    unsortString += "4";
    cntActs = 0;
    updateText();
}
function addFive() {
    unsortString += "5";
    cntActs = 0;
    updateText();
}
function addSix() {
    unsortString += "6";
    cntActs = 0;
    updateText();
}
function addSeven() {
    unsortString += "7";
    cntActs = 0;
    updateText();
}
function addEight() {
    unsortString += "8";
    cntActs = 0;
    updateText();
}
function addNine() {
    unsortString += "9";
    cntActs = 0;
    updateText();
}
function addPoint() {
    elementNow = ".";
    checkPoint();
    updateText();
}

function addMinus() {
    elementNow = "-";
    checkMinus();
    updateText();
}
function addPlus() {
    elementNow = "+";
    checkPlusMulDel();
    updateText();
}
function addMulti() {
    elementNow = "*";
    checkPlusMulDel();
    updateText();
}
function addDel() {
    elementNow = "/";
    checkPlusMulDel();
    updateText();
}
function deleteLastNumber() {
    let i = lengthUnsStr-1;
    while( (! "+-*/".includes( unsortString[i] )) && lengthUnsStr > 0){
        unsortString = unsortString.slice(0, lengthUnsStr-1);
        lengthUnsStr = unsortString.length;
        i--;
    }
    updateText();
}
function deleteAllExpression() {
    unsortString= "";
    lengthUnsStr = 0;
    ntActs = 0;
    cntPoint = 0;
    arrForSmth = [];
    j = 0;
    countDivMul = 0;
    result = 0;
    updateText();
}
function deleteLastSymbol() {
    unsortString = unsortString.slice(0, lengthUnsStr-1);
    lengthUnsStr = unsortString.length;
    updateText();
}

let elementNow = "";
let unsortString= "";
let lengthUnsStr = unsortString.length;