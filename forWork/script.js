function addButton() {
    if(document.querySelector(".eat").hidden == false) {
        document.querySelector(".eat").hidden = true;
        document.querySelector(".sequence").remove();
        document.querySelector(".eat").insertAdjacentHTML("beforebegin", `<div class="sequence"></div>`);

        document.querySelector(".forLunch").remove();
        document.querySelector(".eat").insertAdjacentHTML("afterend", `<div class="forLunch"></div>`);
    }
    let textForButton = document.querySelector(".allTime").value;
    document.querySelector(".input-box").insertAdjacentHTML("afterend", `<button class="btn-for-calcul">${textForButton}</button>`);
    document.querySelector(".allTime").value = null;
}

function calculateTime() {
    let allButton = document.querySelectorAll(".btn-for-calcul");
    let arrOfTimeMinutes = [], indArrMinutes = 0;
    for(elem of allButton) {
        arrOfTimeMinutes[indArrMinutes] = +(elem.innerHTML.slice(0,2))*60 + +(elem.innerHTML.slice(3,5));
        indArrMinutes++;
    }
    //сортировка времени
    arrOfTimeMinutes.sort(function(a, b) {
        return a - b;
    });
    //вывод отстортированного массива
    for(let i = 0; i < arrOfTimeMinutes.length; i ++) {
        let minutes ;
        Math.trunc((arrOfTimeMinutes[i]%60) / 10) == 0 ? minutes = "0" + `${arrOfTimeMinutes[i]%60}` : minutes = `${arrOfTimeMinutes[i]%60}`;
        document.querySelector(".sequence").insertAdjacentHTML("beforeend", `<span>${Math.trunc(arrOfTimeMinutes[i]/60)}:${minutes} => </span>`);
    }
    document.querySelector(".sequence").insertAdjacentHTML("beforeend", `<span>домой</span>`);
    //считаем время для обеда
    for(let i = arrOfTimeMinutes.length - 1; i >= 0; i --) {

        allButton[i].remove();
        if (i == 0) continue;

        document.querySelector(".eat").hidden = false;

        if(arrOfTimeMinutes[i] - arrOfTimeMinutes[i-1] >= 30){
            let minutesPre;
            Math.trunc((arrOfTimeMinutes[i-1]%60) / 10) == 0 ? minutesPre = "0" + `${arrOfTimeMinutes[i-1]%60}` : minutesPre = `${arrOfTimeMinutes[i-1]%60}`;
            let minutesNow;
            Math.trunc((arrOfTimeMinutes[i]%60) / 10) == 0 ? minutesNow = "0" + `${arrOfTimeMinutes[i]%60}` : minutesNow = `${arrOfTimeMinutes[i]%60}`;

            document.querySelector(".forLunch").insertAdjacentHTML("afterbegin", `<p>${Math.trunc(arrOfTimeMinutes[i-1]/60)}:${minutesPre} -  
            ${Math.trunc(arrOfTimeMinutes[i]/60)}:${minutesNow}</p>`);
        }
    }
}
