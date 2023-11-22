let cont = document.getElementById('body-sec')
let absContainer = document.getElementById("absContainer")
let doc = document.getElementById('absName');
let namaz = [
    {name:'Fajr',
    time: new Date (`November 23,2023 06:30`)},
    {name:'Zuhr',
    time: new Date (`November 23,2023 13:45`)},
    {name:'Asr',
    time: new Date (`November 23,2023 16:30`)},
    {name:'Maghrib',
    time: new Date (`November 23,2023 17:40`)},
    {name:'Isha',
    time: new Date (`November 22,2023 19:27`)},
]
var test= []
function setTime(){
   var now = new Date().getTime();
   var arr = [] 
   var zer = "0";
   for(let key in test){
    arr.push(test[key].time)
    }
const a = Math.min(...arr);
for(let key in namaz){
    if(namaz[key].time.getTime() === a){
        var timeleft =namaz[key].time.getTime() - now
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
       if(timeleft>0){
           absContainer.innerHTML=` <h1 id='absName' style="text-align: center;">${namaz[key].name}</h1>
           <div style="display:flex;justify-content: space-around;align-items: center; padding:5px">
           <h2>Remaining Time</h2>
           <h2 id='timeRem'>${hours<10?zer+hours:hours}:${minutes<10?zer+minutes:minutes}:${seconds<10?zer+seconds:seconds}</h2>
           </div>`
        }
    }
 }
}
setInterval(setTime,1000)
function showNamazTime(){
    for(var key in namaz){
        var now = new Date().getTime();
       var timeleft =namaz[key].time.getTime()-now;
       var obj ={}
       if(timeleft>0){
        obj.name = namaz[key].name;
        obj.time = namaz[key].time.getTime()
        test.push(obj)
        obj={}
       }
        cont.innerHTML +=`<div class="n-container">
        <h1>${namaz[key].name}</h1>
        <h1 class="time-logo"> Time:</h1>
        <h1 class="time">${namaz[key].time.toLocaleTimeString()}</h1>
    </div>`
    }
}
showNamazTime();    