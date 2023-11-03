
 var fname = document.getElementById('name')
 var password = document.getElementById('password')
 var cpassword = document.getElementById('cpassword')
 var preUser  = document.getElementById('userInfo')
 var errorMsg = document.getElementById('msg1');
 var errorMsg2= document.getElementById('msg2')
 var createblog = document.getElementById('editor')
 var head = document.getElementById('heading')
 var btn = document.getElementById('button')
 var renderPost1= document.getElementById('postcontainer1')
 var renderPost2 = document.getElementById('postcontainer')
 var post = document.getElementById('post')
 var logoName= document.getElementById('logoName')
 var getItem  = localStorage.getItem('post');
 var arrGetItem = JSON.parse(getItem);
   
   
 var arrObj  = [];
 var objArr  = [];
 var editorValue;
if(renderPost1){
    var quill = new Quill('#editor', {
        theme: 'snow',
        placeholder: 'Create New post`'
    });
    if(arrGetItem){
        for(var i = 0; i<arrGetItem.length; i++){
            renderPost1.innerHTML +=`<div class="post" id="post">${arrGetItem[i].post}</div>`
        }
    }
    
       btn.innerHTML = `<button class=button onclick=renderPost()>Post</button>`  
}

function renderPost(){
    console.log(arrGetItem);
    if(arrGetItem){
        if(quill.root.innerHTML !== " "){
            var obj = {}
            obj.post = quill.root.innerHTML
            obj.fname= logoName.innerHTML
            arrGetItem.unshift(obj)
            localStorage.setItem('post',JSON.stringify(arrGetItem))
            quill.setText("")
        }
    }else{
        if(quill.root.innerText !== " "){
            var obj = {}
            obj.post = quill.root.innerHTML
            obj.fname= logoName.innerHTML
            arrObj.unshift(obj)
            localStorage.setItem('post',JSON.stringify(arrObj))
            quill.setText("")   
        }
        }
    if(renderPost1.innerHTML){
       renderPost1.innerHTML = ""
    } 
    if(arrGetItem){
        for(var i = 0; i<arrGetItem.length; i++){
            console.log("helo");
            renderPost1.innerHTML +=`<div class="post" id="post">${arrGetItem[i].post}</div>`
        }   
    }
    
}
const onSubmit = ()=>{
    if(fname.value.trim() === "" && password.value.trim()=== "" ){
       errorMsg.innerText = "*email required"
       errorMsg2.innerText = "*password required"
    }else if(password.value === ""){
        errorMsg2.innerText = "*password required"
    }
    else{;
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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered Successfully',
                    showConfirmButton: true,
                 
                  })
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
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registered Successfully',
                showConfirmButton: true,
                
              })
         
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

if(userLogin){
    for(var i = 0; i<userLogin.length; i++){
        if( fname.value === userLogin[i].name && userLogin[i].pass === password.value){
            userLogin[i].isLog = true;
            localStorage.setItem('userData', JSON.stringify(userLogin))
               window.location.href = 'index.html'
                flag = false;
         }
    }
}else{
   
        errorMsg.innerHTML = "email not found"
        errorMsg2.innerHTML = "password not matched"
  
     
    
}

    if(flag){
    if( fname.value.trim() === "" && password.value.trim() === ""){
        errorMsg.innerHTML = "email not found"
        errorMsg2.innerHTML = "password not matched"
    } else if( password.value.trim() === ""){
        errorMsg2.innerHTML = "password not matched"
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
if(logoName){
    var localData = localStorage.getItem('userData');
    var localData2 = JSON.parse(localData)
   
    for(var i= 0; i<localData2.length; i++){
    if(localData2[i].isLog){
        logoName.innerHTML =localData2[i].name
    }
}
}
const matchPass=()=>{
    var errorMsg = document.getElementById('msg3');
   if(password.value.trim()=== cpassword.value){
    if(cpassword.value){
        errorMsg.innerText = "password match"
        errorMsg.style.color ='green';  
    }
  
   }else{
    errorMsg.innerText = "*password not match"
    errorMsg.style.color ='red';   
    
   }
}
