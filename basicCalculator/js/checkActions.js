let cntActs = 0;
let cntPoint = 0;

function checkPlusMulDel() {
    if ("+-*/".includes(unsortString[lengthUnsStr-1]) || lengthUnsStr == 0) {
        alert("Так писать не стоит");
    }
    else {
        unsortString += elementNow;
        cntActs++;
        cntPoint = 0;
    }
}

function checkMinus() {
    if ("+-*/0123456789".includes(unsortString[lengthUnsStr-1]) || lengthUnsStr < 2) {
        if (cntActs >= 2) {
            alert("Так писать не стоит");
        }
        else if ("+*/0123456789".includes(unsortString[lengthUnsStr-1]) || lengthUnsStr < 2) {
            unsortString += elementNow;
            cntActs++;
            cntPoint = 0;
        }
    }
}

function checkPoint() {
    if ("0123456789".includes(unsortString[lengthUnsStr-1]) && cntPoint == 0) {
        unsortString += elementNow;
        cntActs = 0;
        cntPoint++;
    }
    else {
        alert("Так писать не стоит");
    }
}