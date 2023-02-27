//-11+23*5/2=
//11+23-5=
//11*23/5=
//1*2-5/1=
//22-5/1=
//11*2-5/1+3*5=
let unsortString = "11*2-5/1+3*5=";
let arrForSmth = [];
let strForNumber = "";
let strNumbers = "0123456789";
let strActsPlusMin = "+-";
let strActsDivMul = "*/";
let j = 0;
let countDivMul = 0;
let result = 0;

for (let i = 0; i < unsortString.length; i++){
    
    //если это число (включая отрицательные значения)
    if (strNumbers.includes(unsortString[i], 0) || unsortString[i] == "."){
        strForNumber += unsortString[i];
        
        //проверка на следующее отрицательное число для упрощения распределения чисел (так легче отделить, например, в примере 23-5)
        if(unsortString[i+1] == "-") {
            //добавление числа в массив
            arrForSmth[j] = strForNumber;
            j++;
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
            if(arrForSmth.length == 0 || strActsDivMul.includes(unsortString[i-1])){
                strForNumber += unsortString[i];
                continue;
            }
        }
        //если знак - плюс, умножить или делить

        //добавление получившегося числа из предыдущей проверки
        arrForSmth[j] = strForNumber;
        strForNumber = "";
        j++;

        //добавление знака плюс, умножить или делить сразу в массив
        arrForSmth[j] = unsortString[i];
        j++;

        if(strActsDivMul.includes(unsortString[i], 0)) {
            //cчётчик количества умножения и деления
            countDivMul++;
        }
    }
    
}

//создание массива без умножения и деления (предварительный подсчёт произведений и частных)
let lengthArr = arrForSmth.length;
if (countDivMul != 0){
    for(let j = 1; j < lengthArr - 1; j++){
        if (countDivMul > 0) {
            if (strActsDivMul.includes(arrForSmth[j])) {
                if(arrForSmth[j] == "*"){
                    //удаление и замена множителей на их произведение
                    arrForSmth.splice(j-1, 3, arrForSmth[j-1]*arrForSmth[j+1]);
                    countDivMul --;
                    j--;
                    lengthArr -= 2;
                }
                else {
                    //удаление и замена делимого и делителя на их частное
                    arrForSmth.splice(j-1, 3, arrForSmth[j-1]/arrForSmth[j+1]);
                    countDivMul --;
                    j--;
                    lengthArr -= 2;
                }
            }
        }
    }
}
//окончательные вычисления сумм и разностей
result += +arrForSmth[0];
for ( let i = 1; i < lengthArr - 1; i++) {
    //в получившемся массиве есть только сложение (знак +) и вычитание (сложение обычного числа и отрицательного числа)
    if (arrForSmth[i] == "+") {
        result += +arrForSmth[i+1];
        i++;
    }
    else {
        result += +arrForSmth[i];
    }
    
}
console.log (result);