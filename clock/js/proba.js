let seconds = -100;

let hour1Img = document.getElementById("hour1");
let hour2Img = document.getElementById("hour2");

let min1Img = document.getElementById("min1");
let min2Img = document.getElementById("min2");

let sec1Img = document.getElementById("sec1");
let sec2Img = document.getElementById("sec2");


let arrSrcNumbers = ["img/0.png", "img/1.png", "img/2.jpg", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png"];

function doStuff() {
    let time = new Date();

    let hour1 = Math.floor(time.getHours() / 10);
    let hour2 = time.getHours() % 10;

    let min1 = Math.floor(time.getMinutes() / 10);
    let min2 = time.getMinutes() % 10;

    let sec1 = Math.floor(time.getSeconds() / 10);
    let sec2 = time.getSeconds() % 10;

    if (seconds != time.getSeconds()) {
        hour1Img.src = arrSrcNumbers[hour1];
        hour2Img.src = arrSrcNumbers[hour2];

        min1Img.src = arrSrcNumbers[min1];
        min2Img.src = arrSrcNumbers[min2];

        sec1Img.src = arrSrcNumbers[sec1];
        sec2Img.src = arrSrcNumbers[sec2];
    }

    seconds = time.getSeconds();
}
setInterval(doStuff, 1);