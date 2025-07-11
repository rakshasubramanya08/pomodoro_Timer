let btnStart = document.getElementById("btnSt");
let btnStop = document.getElementById("btnSp");
let btnReset = document.getElementById("btnRs");

let getTime = document.getElementById("timer");

btnStart.addEventListener('click',()=>{
  return timeRun();
})

btnStop.addEventListener('click',()=>{
    
})

btnReset.addEventListener('click',()=>{
    
})

let interval;       //to start or stop the time loop.
let timeInterval = 1500;   // 1500 sec = 25min

function timeRun(){
    console.log(getTime);
    let minutes = Math.floor(timeInterval/60);
    let seconds = timeInterval % 60;

}
