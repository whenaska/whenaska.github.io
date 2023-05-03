let elementNow = "";
let unsortString= "";
let lengthUnsStr = unsortString.length;

//numbers
document.querySelector(".numbers").addEventListener("click", function(event){
    if(!strNumbers.includes(event.target.innerHTML)) return;

    unsortString += `${event.target.innerHTML}`;
    cntActs = 0;
    
    updateText();
});

//point
function addPoint() {
    elementNow = ".";
    checkPoint();
    updateText();
}

//acts
function addPlusMulDelMin(elem) {
    elementNow = `${elem}`;

    if(elementNow == "-") checkMinus();
    else checkPlusMulDel();

    updateText();
}

document.querySelector(".actions").addEventListener("click", function(event){
    if(event.target.tagName != "BUTTON") return;

    let objOfAct = {
        "CE": deleteLastNumber,
        "C": deleteAllExpression,
        "←": deleteLastSymbol,
        "-": () => addPlusMulDelMin("-"),
        "+": () => addPlusMulDelMin("+"),
        "*": () => addPlusMulDelMin("*"),
        "/": () => addPlusMulDelMin("/"),
        "=": calculateResult,
    };

    objOfAct[event.target.innerHTML]();
});