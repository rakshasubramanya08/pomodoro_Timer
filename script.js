const getTime = document.getElementById('timer');


const btnStart = document.getElementById('btnSt');
const btnStop = document.getElementById('btnSp');
const btnReset = document.getElementById('btnRs');

//timeRun();

btnStart.addEventListener('click',()=>{
  return timeRun();
})

function startTime(){
    
}

btnStop.addEventListener('click',()=>{
  return timeRun();
   
})

btnReset.addEventListener('click',()=>{
  return timeRun();
    
})

let interval;       //to start or stop the time loop.
let timeInterval = 1500;   // 1500 sec = 25min

function timeRun(){
    let minutes = Math.floor(timeInterval/60);
    let seconds = timeInterval % 60;
    let fullTime = '${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}';
    
    getTime.innerText = fullTime;
}