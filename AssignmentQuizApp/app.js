var qnA = [
    {question: 'how many of them?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
},
{question: 'who are you?',
     option1: 'a',
     option2: 'b',
     option3: 'c',
     Ans : 'a'
}
]

var doc = document.getElementById('quiz')
var index = 0;
function renderQuestion(){
if(qnA[index]){
  doc.innerHTML = `
  <p class="question"><span class="question1">Q</span>:${qnA[index].question}</p>
  <li name="q1"><input type="radio" name="q1">${qnA[index].option1}</li>
  <li name="q1"><input type="radio" name="q1">${qnA[index].option2}</li>
  <li name="q1"><input type="radio" name="q1">${qnA[index].option3}</li>`
}
   index++ ;
   

}
renderQuestion();


