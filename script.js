let ms = 0;
let seconds = 0;
let min = 0;
let hour = 0;

let displayMs = 0;
let displaySeconds = 0;
let displayMin = 0;
let displayHour = 0;

let interval = null;
let state = "stopped";

function stopwatch(){
    ms++;

    if(ms / 100 === 1){
        ms = 0;
        seconds++;

        if(seconds / 60 === 1){
            seconds = 0;
            min++;

            if(min / 60 === 1){
                min = 0;
                hour++;
            }
        }
    }
    if(ms < 10){
        displayMs = "0"  + ms.toString();
    } else {
        displayMs = ms;
    }

    if(seconds < 10){
        displaySeconds = "0"  + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    
    if(min < 10){
        displayMin = "0"  + min.toString();
    } else {
        displayMin = min;
    }
    
    if(hour < 10){
        displayHour = "0"  + hour.toString();
    } else {
        displayHour = hour;
    }

    document.getElementById("display").innerHTML = displayHour + ":" + displayMin + ":" + displaySeconds;
    document.getElementById("ms").innerHTML = displayMs;
}


function startStop(){
    if(state === "stopped"){
        interval = window.setInterval(stopwatch, 10);
        document.getElementById("startStop").innerHTML   = "Stop";
        state = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML   = "Start";
        state = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    ms = 0;
    seconds = 0;
    min = 0;
    hour = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("ms").innerHTML = "00";

    if(state === "started"){
        document.getElementById("startStop").innerHTML   = "Start";
        state = "stopped";
    }
}
