// Get the elements
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const lapList = document.getElementById("laplist")

//Stopwatch variables
let m = 0;
let s = 0;
let ms = 0;
let interval;
  
//Add event listeners to the buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Create functions
function startTimer(){
    interval = setInterval(updateTimer, 10);
    startBtn.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startBtn.disabled = false;
}

function pauseTimer(){
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;
}

function updateTimer(){
    ms++;
    if(ms === 1000){
        ms = 0;
        s++;

        if(s === 60){
            s = 0;
            m++;
        }
    }

    displayTimer();
}

function displayTimer(){
    milliseconds.textContent = padTime(ms);
    seconds.textContent = padTime(s);
    minutes.textContent = padTime(m);
}

function padTime(time){
    return time.toString().padStart(2, '0')
}

function resetTimerData(){
    m = 0;
    s = 0;
    ms = 0;

    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(m)}:${padTime(s)}:${padTime(ms)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span> Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    
    lapList.appendChild(listItem)
}