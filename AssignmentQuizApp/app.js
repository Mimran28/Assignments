var qnA = [
    {question: 'how many of them?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
},
{    question: 'who are you?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
},{
     question: 'whosdfsad are you?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
},
{    question: 'who 12312312are you?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
},
{    question: 'well are you?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
}
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
  <p class="question"><span class="question1">QNo ${index+1}</span>:${qnA[index].question}</p>
  <li name="q1"  class="list-radio"><input type="radio"  value="${qnA[index].option1}" id="input" name="q1">${qnA[index].option1}</li>
  <li name="q1" class="list-radio"><input type="radio"  value="${qnA[index].option2}" id="input" name="q1">${qnA[index].option2}</li>
  <li name="q1" class="list-radio"><input type="radio"  value="${qnA[index].option3}" id="input" name="q1">${qnA[index].option3}</li>`
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
          <p style="text-align: center">Correct answers ${score}</p>`     
     }else if(percent>50){
          quizContainer.innerHTML= `
          <div class="w3-light-grey">
          <div class="w3-container w3-green w3-center" style="width:${percent}%">${percent}%</div>
        </div>
        <h1 style="color:green">Congratulation You Passed</h1>
          <p style="text-align: center">Total Question ${qnA.length}</p>
          <p style="text-align: center">Correct answers ${score}</p>`
     }
     
}

