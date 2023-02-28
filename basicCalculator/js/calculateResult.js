let arrForFormula = [];
let indexOfArr = 0;
let lastAction = "";
let strForNumber = "";

let countDivMul = 0;
let result = 0;
let copyResult = 0;

let strNumbers = "0123456789";
let strActsDivMul = "*/";

function calculateResult() {
    unsortString += "=";
    for (let i = 0; i < unsortString.length; i++){
        
        //если это число (включая отрицательные значения)
        if (strNumbers.includes(unsortString[i], 0) || unsortString[i] == "."){
            strForNumber += unsortString[i];
            
            //проверка на следующее отрицательное число для упрощения распределения чисел (так легче отделить, например, в примере 23-5)
            if(unsortString[i+1] == "-") {
                //добавление числа в массив
                arrForFormula[indexOfArr] = strForNumber;
                indexOfArr++;
                //обнуление для последующей проверки
                strForNumber = "";
                strForNumber += unsortString[i+1];
                i++;
                continue;
            }
        }
        //если это знак
        else {
            if(unsortString[i] == "-" ) {
                //для корректного добавления первого отрицательного элемента и отрицательного элемента после умножения или деления
                if(arrForFormula.length == 0 || strActsDivMul.includes(unsortString[i-1])){
                    strForNumber += unsortString[i];
                    continue;
                }
            }
            //если знак - плюс, умножить или делить

            //добавление получившегося числа из предыдущей проверки
            arrForFormula[indexOfArr] = strForNumber;
            strForNumber = "";
            indexOfArr++;

            //добавление знака плюс, умножить или делить сразу в массив
            arrForFormula[indexOfArr] = unsortString[i];
            indexOfArr++;

            if(strActsDivMul.includes(unsortString[i], 0)) {
                //cчётчик количества умножения и деления
                countDivMul++;
            }
        }
        
    }
    //поиск последнего действия в массиве (+, -, * или /)
    let lengthArr = arrForFormula.length;
    lastAction = "";
    for(let indexOfArr = lengthArr - 1; indexOfArr >= 0; indexOfArr--){
        if("*+/".includes(arrForFormula[indexOfArr]) || +arrForFormula[indexOfArr] < 0) {
            if("*+/".includes(arrForFormula[indexOfArr])) {
                lastAction += arrForFormula[indexOfArr];
                lastAction += arrForFormula[indexOfArr+1];
                break;
            }
            else if ("*+/".includes(arrForFormula[indexOfArr-1])) {
                lastAction += arrForFormula[indexOfArr-1];
                lastAction += arrForFormula[indexOfArr];
                break;
            }
            else {
                lastAction += arrForFormula[indexOfArr];
                break;
            }
        }
    }
    //создание массива без умножения и деления (предварительный подсчёт произведений и частных)
    if (countDivMul != 0){
        for(let indexOfArr = 1; indexOfArr < lengthArr - 1; indexOfArr++){
            if (countDivMul > 0) {
                if (strActsDivMul.includes(arrForFormula[indexOfArr])) {
                    if(arrForFormula[indexOfArr] == "*"){
                        //удаление и замена множителей на их произведение
                        arrForFormula.splice(indexOfArr-1, 3, arrForFormula[indexOfArr-1]*arrForFormula[indexOfArr+1]);
                        countDivMul --;
                        indexOfArr--;
                        lengthArr -= 2;
                    }
                    else {
                        //удаление и замена делимого и делителя на их частное
                        arrForFormula.splice(indexOfArr-1, 3, arrForFormula[indexOfArr-1]/arrForFormula[indexOfArr+1]);
                        countDivMul --;
                        indexOfArr--;
                        lengthArr -= 2;
                    }
                }
            }
        }
    }
    //окончательные вычисления сумм и разностей
    result += +arrForFormula[0];
    for ( let i = 1; i < lengthArr - 1; i++) {
        //в получившемся массиве есть только сложение (знак +) и вычитание (сложение обычного числа и отрицательного числа)
        if (arrForFormula[i] == "+") {
            result += +arrForFormula[i+1];
            i++;
        }
        else {
            result += +arrForFormula[i];
        }
        
    }
    copyResult = result;
    displayFormula.innerHTML = result.toString();
    clear();
    unsortString = copyResult.toString();
    unsortString += lastAction;
    lengthUnsStr = unsortString.length;
}