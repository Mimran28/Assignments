
var fname = document.getElementById('name')
var password = document.getElementById('password')
var cpassword = document.getElementById('cpassword')
var preUser  = document.getElementById('userInfo')
var errorMsg = document.getElementById('msg1');
var errorMsg2= document.getElementById('msg2')
 
var objArr=[]
const onSubmit = ()=>{
    if(fname.value === "" && password.value === "" ){
       errorMsg.innerText = "*email required"
       errorMsg2.innerText = "*password required"
    }else if(password.value === ""){
        errorMsg2.innerText = "*password required"
    }
    else{
        var getUser = localStorage.getItem('userData')
        if(getUser){
           var parsedUser = JSON.parse(getUser);
           var flag = true;
          for(var i= 0; i<parsedUser.length; i++){
            if(parsedUser[i].name === fname.value){
                alert('already registered redirecting to login')
                window.location.href="login.html"
                flag = false;
            } 
        }
        if(flag){
            if(password.value === cpassword.value){
                let obj= {}
                obj.name = fname.value;
               obj.pass = password.value;
              obj.isLog = true;
                parsedUser.push(obj);
                localStorage.setItem('userData',JSON.stringify(parsedUser))
              alert('registered successfully');
              window.location.href ="index.html"
            
            }else{
                matchPass();
            }
        }
    }else{
        if(password.value === cpassword.value){
            let obj= {}
            obj.name = fname.value;
           obj.pass = password.value;
           obj.isLog = true;
            objArr.push(obj);
            localStorage.setItem('userData',JSON.stringify(objArr))
            alert('registered successfully');
         
            window.location.href ="index.html"
          
        }else{
            matchPass();
        }
        
            }
    }    
}

const onLogin =()=>{
    var getUser = localStorage.getItem('userData')
    var userLogin= JSON.parse(getUser)
var flag = true;
    for(var i = 0; i<userLogin.length; i++){
        if( fname.value === userLogin[i].name && userLogin[i].pass === password.value){
            userLogin[i].isLog = true;
            localStorage.setItem('userData', JSON.stringify(userLogin))
               window.location.href = 'index.html'
                flag = false;
         }
    }
    if(flag){
    if(userLogin.name !== fname.value){
        errorMsg
    } 
    }
}
const onLogout =()=>{
    var isLogged = localStorage.getItem('userData')
    var isLoggedUser = JSON.parse(isLogged)
   
        for(var i = 0; i<isLoggedUser.length; i++){
            if(isLoggedUser[i].isLog  ){
              isLoggedUser[i].isLog = false;
               localStorage.setItem('userData',JSON.stringify(isLoggedUser))   
            }
      
      window.location.href="login.html"
    }
}
if(preUser){
    var localData = localStorage.getItem('userData');
    var localData2 = JSON.parse(localData)
for(var i= 0; i<localData2.length; i++){
    if(localData2[i].isLog){
        preUser.innerHTML = `<h1>Welcome Mr.${localData2[i].name}</h1>`
    }
}
}
const matchPass=()=>{
    var errorMsg = document.getElementById('msg3');
   if(password.value=== cpassword.value){
    errorMsg.innerText = "password match"
    errorMsg.style.color ='green';   
   }else{
    errorMsg.innerText = "*password not match"
    errorMsg.style.color ='red';   
    
   }
}