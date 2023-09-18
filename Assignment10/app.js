
var ans = document.getElementById("input")
var ans2 = document.getElementById("para");

var num1 = "";
var arr = ["+","-","x","%","÷","="]
function addition(val){

   if(num1[num1.length -1] === "="){
       num1="";
       ans2.innerHTML =""
   }
    if(arr.indexOf(val) === -1 ){
        num1 += val.toString();
        ans.value= num1
            
    }else if(num1.length>0 ){

        num1 += val.toString();
        ans2.innerHTML += num1
     
        num1= ""
    }
    
}
function showResult (val){

    if(ans2.innerHTML && num1[num1.length -1] !== "="){

        num1 += val;
        ans2.innerHTML += num1
        var total = ans2.innerHTML.replaceAll("x","*");
       if(total.indexOf("÷") !== -1){
           total = ans2.innerHTML.replaceAll("÷","/")
        }
        var sum = eval(total.slice(0,-1));
        ans.value = sum;
      
    }
}

function clearAll(){
    ans2.innerHTML = "";
    num1 = "";
    ans.value = ""
}
function clearLast(){
    ans.value =0;
    num1 =""
}
