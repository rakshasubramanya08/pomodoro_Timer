const getTime = document.getElementById(`timer`);


const btnStart = document.getElementById('btnSt');
const btnStop = document.getElementById('btnSp');
const btnReset = document.getElementById('btnRs');

btnStart.addEventListener('click',startTime);

btnStop.addEventListener('click',stopTimer)

btnReset.addEventListener('click',resetTimer)

let interval;       //to start or stop the time loop.
let timeInterval = 1500;   // 1500 sec = 25min

function timeRun(){
    let minutes = Math.floor(timeInterval/60);
    let seconds = timeInterval % 60;
    let fullTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    
    getTime.innerText = fullTime;
    // document.getElementById(`timer`).innerText = fullTime;
    console.log(getTime);
}

function startTime(){
    interval = setInterval(() => {
    timeInterval--;
    timeRun();
     if (timeInterval === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeInterval = 1500;
      timeRun();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeInterval = 1500;
  timeRun();
}
