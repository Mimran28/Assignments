var qnA = [
     {
     question : "A man is in a car is moving with velocity of 36km/hr. His speed with repect to the car is...?",
     option1 : "10m/s",
     option2 : "36m/s",
     option3 : "zero",
     option4 : "infinite",
     ans : 'zero'
 
 },

 {
     question : "Area under velocity time graph represent...?",
     option1 : "force",
     option2 : "displacement",
     option3 : "distance",
     option4 : "acceleration",
     ans : 'displacement'
 
 },

 {
     question : "1st law of motion gives the definition of...?",
     option1 : "rest",
     option2 : "motion",
     option3 : "velocity",
     option4 : "force",
     ans : 'force'
 
 },

 {
     question : "The dimension of force is...?",
     option1 : "MLT-2",
     option2 : "ML2T-2",
     option3 : "ML2T2",
     option4 : "ML-2T-2",
     ans : 'MLT-2'
 
 },

 {
     question : "Taking off rocket can be explained by...?",
     option1 : "1st law of motion",
     option2 : "2nd law of motion",
     option3 : "Law of conservation of momentum",
     option4 : "law of conservation of energy",
     ans : 'Law of conservation of momentum'
 
 },

 {
     question : "Distance covered by a freely falling body in 2 seconds will be...?",
     option1 : "4.9 m",
     option2 : "19.6 m",
     option3 : "39.2 m",
     option4 : "44.2 m",
     ans : '19.6 m'
 
 },

 {
     question : "Time rate of change of momentum is equal to_...?",
     option1 : "force",
     option2 : "impulse",
     option3 : "velocity",
     option4 : "both A and C",
     ans : 'force'
 
 },

 {
     question : "A body is moving with uniform velocity. Its...?",
     option1 : "speed changes",
     option2 : "acceleration changes",
     option3 : "direction of motion changes",
     option4 : "displacement from origin changes",
     ans : 'displacement from origin changes'
 
 },

 {
     question : "A body is moving with uniform velocity. Its...?",
     option1 : "speed changes",
     option2 : "acceleration changes",
     option3 : "direction of motion changes",
     option4 : "displacement from origin changes",
     ans : 'displacement from origin changes'
 
 },

 {
     question : "2nd law of motion gives the definition of...?",
     option1 : "force",
     option2 : "acceleration",
     option3 : "velocity",
     option4 : "both force and acceleration",
     ans : 'acceleration'
 
 },

 {
     question : "Momentum depends upon_...?",
     option1 : "force acts on the body",
     option2 : "mass of the body",
     option3 : "velocity of the body",
     option4 : "both mass and velocity of the body",
     ans : 'both mass and velocity of the body'
 
 },

 {
     question : "During long jump, athlete runs before taking the jump. By doing so he_...?",
     option1 : "provide him a larger inertia",
     option2 : "decreases his inertia",
     option3 : "increases his momentum",
     option4 : "decreases his momentum",
     ans : 'increases his momentum'
 
 },

 {
     question : "Which of the following is not an example of projectile motion _...?",
     option1 : "a gas filled ballon",
     option2 : "bullet fired from gun",
     option3 : "a football kicked",
     option4 : "a base ball shot",
     ans :  'a gas filled ballon'
 
 },

 {
     question : "The distance between any two consecutive crests or troughs is called..?",
     option1 : "frequency",
     option2 : "period",
     option3 : "Wave length",
     option4 : "phase difference",
     ans : 'Wave length'
 
 },

 {
     question : "In vibrating cord the points where the amplitude is maximum, are called...?",
     option1 : "antinodes",
     option2 : "nodes",
     option3 : "troughs",
     option4 : "crests",
     ans : 'antinodes'
 
 },
]

var doc = document.getElementById('quiz');
var quizContainer = document.getElementById('quiz-container')
var doc1 = document.getElementById('timer')
var ques = document.getElementById('totalques')
var input;
var index = 0; 
var sec = 10;
var min = 1
var timer;
var score = 0;

function renderQuestion(){
    if(index>0){
     ques.innerText = `Remaining Questions: ${qnA.length - (index)}`
    }
if(index+1 === qnA.length){
     var button = document.getElementById('submit-button')
     button.innerText = `Submit Test`
}
console.log(qnA[index]);

if(qnA[index]){
     input = document.getElementsByTagName('input')
     for(var i=0; i<input.length; i++){
          if(input[i].checked){
           if(input[i].value === qnA[index].Ans){
                score++            
      }
          }
     }     
     ques.innerText= `Total Questions : ${qnA.length}`
if(index>0){
     ques.innerText= `Remaining Questions : ${qnA.length-index}`
}

  doc.innerHTML = `
  <p class="question"><span class="question1">Q${index+1} </span>:${qnA[index].question}</p>
  <li name="q1"  class="list-radio"><input type="radio"  value="${qnA[index].option1}" id="input" name="q1">${qnA[index].option1}</li>
  <li name="q1" class="list-radio"><input type="radio"  value="${qnA[index].option2}" id="input" name="q1">${qnA[index].option2}</li>
  <li name="q1" class="list-radio"><input type="radio"  value="${qnA[index].option3}" id="input" name="q1">${qnA[index].option3}</li>
  <li name="q1" class="list-radio"><input type="radio"  value="${qnA[index].option4}" id="input" name="q1">${qnA[index].option4}</li>`
}
clearInterval(timer)
callInterval()
if(sec <10){
     sec =11;
     min = 1;
}
index++ ;
}
function callInterval(){

     timer = setInterval(() => {
          sec-- 
          if(min<1 && sec<1){
               sec=11;
               min=1;
     
               renderQuestion();
           }else if(sec<1){
               sec= 11;
               min--;
            
          }
          if(!qnA[index-1]){
               clearInterval(timer);
               showResult();
          } 
      doc1.innerHTML = `${min}:${sec}`

         }, 1000);}

renderQuestion();


function showResult(){
     var percent = (score*100)/qnA.length;
     if(percent<40){
          quizContainer.innerHTML= `
          <div class="w3-light-grey">
          <div class="w3-container w3-red w3-center" style="width:${percent}%">${percent}%</div>
        </div>
        <h1 style="color:red">Sorry You failed</h1>
          <p style="text-align: center">Total Question ${qnA.length}</p>
          <p style="text-align: center">Correct anss ${score}</p>`     
     }else if(percent>50){
          quizContainer.innerHTML= `
          <div class="w3-light-grey">
          <div class="w3-container w3-green w3-center" style="width:${percent}%">${percent}%</div>
        </div>
        <h1 style="color:green">Congratulation You Passed</h1>
          <p style="text-align: center">Total Question ${qnA.length}</p>
          <p style="text-align: center">Correct anss ${score}</p>`
     }
     
}

