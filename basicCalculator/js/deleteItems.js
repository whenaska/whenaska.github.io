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
    clear();
    updateText();
}

function deleteLastSymbol() {
    unsortString = unsortString.slice(0, lengthUnsStr-1);
    lengthUnsStr = unsortString.length;
    
    updateText();
}