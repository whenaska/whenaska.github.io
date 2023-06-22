function check() {
    let arrOfTime = [];
    let arrForBreak = [];
    let indBreak = 0;
    let text = document.querySelector(".allTime").value;

    text = text.replaceAll(":", ".")
    arrOfTime = text.split(",");

    arrOfTime.sort(function(a, b) {
        return a - b;
    });

    for(let i = 1; i < arrOfTime.length; i++) {

        let minuteMax = +((arrOfTime[i])[0] + (arrOfTime[i])[1])*60 + +((arrOfTime[i])[3] + (arrOfTime[i])[4]);
        let minuteMin = +((arrOfTime[i-1])[0] + (arrOfTime[i-1])[1])*60 + +((arrOfTime[i-1])[3] + (arrOfTime[i-1])[4]);
        
        if( minuteMax - minuteMin >= 30){
            console.log(minuteMax, minuteMin, minuteMax - minuteMin);
            arrForBreak[indBreak] = `${arrOfTime[i-1].replaceAll(".", ":")} - ${arrOfTime[i].replaceAll(".", ":")}`;
            indBreak++;
        }
    }

    document.querySelector(".eat").hidden = false;

    for(let i = arrForBreak.length - 1; i >= 0; i--) {
        document.querySelector(".eat").insertAdjacentHTML("afterend", `<p>${arrForBreak[i]}<p/>`)
    }

    for(let i = 0; i < arrOfTime.length; i++) {
        document.querySelector(".eat").insertAdjacentHTML("beforebegin", `<span>${arrOfTime[i].replace(".", ":")} => <span/>`)
    }
    document.querySelector(".eat").insertAdjacentHTML("beforebegin", `<span>домой<span/>`)
}