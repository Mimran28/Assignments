var hr=0; 
var min = 0;
var sec = 0;
var mili = 0;
var tMin = 0;
var tSec = 0;
var timer = document.getElementById('timer');
var btn = document.getElementById('button')
var lap = document.getElementById('lapContainer')
var lapBtn = document.getElementById('lapBtn')
var timerContainer = document.getElementById('timerContainer')
var timerInput = document.getElementById('timerInput')
function setTimer(){
    mili++
 if(mili>100){
    sec ++
    mili = 0
     if(sec>59){
         min++;
         sec= 0;
         if(min >59){
             hr++;
             min = 0;
            } 
        }
    }
timer.innerHTML = `<h1>${hr?hr+"h":""} ${hr || min?min+"m":''} ${sec}<span>s</span> ${mili<10?"0"+mili: mili}</h1>`
}
function setVal(){
    var timerInput = document.getElementById('timerInput')
    var tVal =timerInput.value.length 
        if(tVal){
       if(tVal <3){
        tSec = timerInput.value
       }else if(timerInput.value.length >= 3){
        tMin = +timerInput.value.slice(0,2)
        tSec = +timerInput.value.slice(2);
       }
    }
    console.log(tMin,tSec);
}
var interVal;
function runTimer(){
    if(timer.style.display !== 'none'){
        if(btn.innerText === 'start'){
            interVal = setInterval(setTimer,10)
            btn.innerText = 'stop'
        }else{
            clearInterval(interVal);
            btn.innerText = 'start'
        }
    }else{

        if(timerInput.value && (tSec || tMin)){
            console.log(tMin,tSec);
            function sTimer(){
                tSec--
                if(tSec || tMin){
                    if(tSec<1){
                          tMin--;
                           tSec = 59 
                      }
                      timerContainer.innerHTML = `<h1>${tMin?tMin+"m":''} ${tSec}<span>s</span></h1>`
                }else{
                    timerContainer.innerHTML = `<h1>Timed Out</h1>`
                    clearInterval(interVal);
                    if(timerContainer.style.display !== 'none'){
                        btn.innerText = 'Set Timer'
                    }
                }
                
            }
        }
        if(btn.innerText === 'start' && timerInput.value && (tSec || tMin)){
            interVal = setInterval(sTimer,1000)
            btn.innerText = 'stop'
        }else if(btn.innerText === 'Set Timer'){
          timerContainer.innerHTML = `<input type="number" onkeyup="setVal()" id="timerInput" placeholder="mm ss">`
          btn.innerHTML = 'start'  
        }else{
            clearInterval(interVal);
            btn.innerText = 'start'
        }
}
}
function resetTimer(){
    clearInterval(interVal)
    mili = 0;
    sec =0;
    min= 0;
    hr = 0;
    timer.innerHTML = `<h1>${hr?hr+"h":""} ${hr || min?min+"m":''} ${sec}<span>s</span> ${mili}</h1>`
    btn.innerText = 'start'
}
function lapTimer(){
  if(mili && btn.innerText === 'stop'){
      lap.innerHTML += `<h5>${hr?hr+"h":""} ${min?min+"m":""} ${sec}s ${mili<10?"0"+mili: mili}ms</h5>`
  }
}
function runSTimer(){
   if(timerContainer.innerText === "Timed Out"){
    btn.innerText = 'Set Timer'
   }
    timerContainer.style.display = 'flex'
    timer.style.display = 'none'
    lapBtn.style.display = 'none'
    if(btn.innerText === 'stop'){
        btn.innerText = 'start'
    }

}
function runStopWatch(){
    timerContainer.style.display = 'none'
    timer.style.display = 'flex'
    lapBtn.style.display = 'inline-block'
    if(btn.innerText === 'stop' || btn.innerText === 'Set Timer'){
        btn.innerText = 'start'
    }
}