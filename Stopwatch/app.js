var timer = document.getElementById('timer')
var hr=0 ; 
var min = 0;
var sec = 0;
var mili = 0;
var timer = document.getElementById('timer');
var btn = document.getElementById('button')
var lap = document.getElementById('lapContainer')
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
timer.innerHTML = `<h1>${hr?hr+"h":""} ${hr || min?min+"m":''} ${sec}<span>s</span> ${mili}</h1>`
}
var interVal;
function runTimer(){
    if(btn.innerText === 'start'){
        interVal = setInterval(setTimer,10)
        btn.innerText = 'stop'
    }else{
        clearInterval(interVal);
        btn.innerText = 'start'
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
    console.log(lap.innerText);
  if(mili && btn.innerText === 'stop'){
      lap.innerHTML += `<h5>${hr?hr+"h":""} ${min?min+"m":""} ${sec}s ${mili}ms</h5>`
  }
}