let seconds = 0;
let min = 0;
let hour = 0;

let displaySeconds = 00;
let displayMin = 00;
let displayHour = 00;

let interval = null;
let state = "stopped";

function stopwatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        min++;

        if(min / 60 === 1){
            min = 0;
            hour++;
        }
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
}


function startStop(){
    if(state === "stopped"){
        interval = window.setInterval(stopwatch, 1000);
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
    seconds = 0;
    min = 0;
    hour = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}