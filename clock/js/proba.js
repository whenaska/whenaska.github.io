let seconds = -100;
let allImg = document.querySelectorAll("img");
let arrSrcNumbers = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg"];

function changeTime() {
    let time = new Date();
    if (seconds == time.getSeconds()) return;

    let arrTime = [`${time.getHours()}`, `${time.getMinutes()}`, `${time.getSeconds()}`];
    let cntImg = 0;
    let timeNow;

    for(timeArr of arrTime){
        timeArr.length == 2 ? timeNow = timeArr : timeNow = "0" + timeArr;
       
        allImg[cntImg].src = arrSrcNumbers[timeNow[0]];
        allImg[cntImg+1].src = arrSrcNumbers[timeNow[1]];

        cntImg += 4;
    };

    seconds = time.getSeconds();
}

setInterval(changeTime, 100);