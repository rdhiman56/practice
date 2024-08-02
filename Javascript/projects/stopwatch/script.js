
let timelaps = 0;
let interval;
let isRunning = false;

const startPause = document.getElementById("startPause");
const lapButton = document.getElementById("lapButton");
const resetButton = document.getElementById("resetButton");
const time = document.querySelector('.time');
const lapslist = document.querySelector(".laps")

function formatTime(ms) {
    const minute = Math.floor(ms/60000);
    const second = Math.floor((ms % 60000)/1000);
    const milliseconds = (ms % 1000).toString().substr(0, 2);
    const minuteString = (minute < 10 ? 0 : '') + minute;
    const secondString = (minute < 10 ? 0 : '') + second;
    const millisecondsString = (minute < 10 ? 0 : '') + milliseconds;
    return `${minuteString}:${secondString}:${millisecondsString}`;
}

function startStopWatch() {
    setInterval(function(){
        timelaps += 10;
        time.textContent = formatTime(timelaps);
    }, 10)
}

startPause.addEventListener("click", function(){
    startStopWatch();
    startPause.textContent ="Pause";
});

function pauseStopWatch() {
    clearInterval(interval);
}