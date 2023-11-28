let cont = document.getElementById('body-sec')
let absContainer = document.getElementById("absContainer")
let doc = document.getElementById('absName');
let namaz = [
    {name:'Fajr',
    time:'01:58:00AM'},
    {name:'Zuhr',
    time: '01:52:10AM'},
    {name:'Asr',
    time: '01:52:20AM'},
    {name:'Maghrib',
    time: '05:40PM'},
    {name:'Isha',
    time: '07:29PM'},
]
var test= []
let namazName;
function setTime(){
let now = new Date();
let zer = '0';
let hours = now.getHours();
let am = hours>=12?'PM':'AM'
hours = hours>=12?hours%12:hours
let minutes = now.getMinutes();
let seconds = now .getSeconds();
let time = `${hours<10?zer+hours:hours}:${minutes<10?zer+minutes:minutes}:${seconds<10?zer+seconds:seconds}${am}`
console.log(time);
for(let key in namaz){
 if(namaz[key].time === time){
 namazName = namaz[key].name
  }
}
absContainer.innerHTML=`
           <h1 id='timeRem'>${hours<10?zer+hours:hours}:${minutes<10?zer+minutes:minutes}:${seconds<10?zer+seconds:seconds} ${am}</h1>`
        }
setInterval(setTime,1000)
setInterval(function(){
    console.log(namazName);
    if(namazName){
        navigator.serviceWorker.ready.then(rewSa=>{
            const options = {
           message:'this is body'
            }
            rewSa.showNotification();
          })
          namazName = ""
      }
  },1000)
function showNamazTime(){
   
    for(var key in namaz){

        cont.innerHTML +=`<div class="n-container">
        <h1>${namaz[key].name}</h1>
        <h1 class="time-logo"> Time:</h1>
        <h1 class="time">${namaz[key].time}</h1>
    </div>`
    }
}
showNamazTime();    
function testTime (){
    let arr = ['00:45','00:46','00:47']
    let namazArr = ['fajr','zuhr','asr']
    let nowTime = new Date();
    let zer = '0';
    let setCurrent =`${nowTime.getHours()<10?zer+nowTime.getHours():nowTime.getHours()}:${nowTime.getMinutes()<10?zer+nowTime.getMinutes():nowTime.getMinutes()}`
    for(let i= 0;i<arr.length; i++){
        if(arr[i] === setCurrent){
            if(arr[i+1]){
                console.log(arr[i+1],namazArr[i+1]);
            }else{
                console.log(arr[0],namazArr[0]);
            }
        }
    }
}
setInterval(testTime,1000)


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        Notification.requestPermission().then(res=>{
            if(Notification.permission === 'granted'){
                console.log('permision granted');
                return 
            }
            console.log(res);
        })
        .catch(err => console.log("service worker not registered", err))
    })
  }
 
  
  