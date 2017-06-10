var timeLeft = 10;
var curTime = 0;
var timeInterval = Math.floor(100 / timeLeft);

setInterval(function() {
    document.getElementById("time").innerHTML = timeLeft.toString();
    document.getElementById("det").style.width = curTime * timeInterval + "%";
    if (timeLeft > 0) {
        timeLeft--;
        curTime++;
    } else {
        timeLeft = 10;
        curTime = 0;
        window.location = "http://www.michaellouie.xyz:4";
    }
}, 1000);

