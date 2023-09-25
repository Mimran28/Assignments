var left = 0;
var right = 0;
function abc(){
    var character = document.getElementById('character');
    var characterEn = document.getElementById('character-enemy');
    console.log(event.keyCode)
    if(event.keyCode === 68){
        left = left+10
        character.style.left =left+ 'px'
    }else if(event.keyCode === 65){
        left = left-10
        character.style.left =left+ 'px'
    }else if(event.keyCode === 32){
        character.src = 'jump.gif'
        character.style.height = '400px'
        character.style.width = '400px'
        setTimeout(function(){
            character.src = 'snk.gif'
            character.style.height = '250px'
            character.style.width = '250px'
        },1000)
    }else if(event.keyCode === 88){
        character.src = 'kick.gif'
        character.style.height = '500px'
        character.style.width = '500px'
        setTimeout(function(){
            character.src = 'snk.gif'
            character.style.height = '250px'
            character.style.width = '250px'
        },2000)
    }
    else if(event.keyCode === 74){
        right = right+10
        characterEn.style.right =right+ 'px'
    }else if(event.keyCode === 76){
        right = right-10
        characterEn.style.right =right+ 'px'
    }else if(event.keyCode === 89){
        characterEn.src = 'punch.gif'
        characterEn.style.height = '400px'
        characterEn.style.width = '400px'
        setTimeout(function(){
            characterEn.src = 'enemy.gif'
            characterEn.style.height = '250px'
            characterEn.style.width = '250px'
        },1000)
    }else if(event.keyCode === 85){
        characterEn.src = 'en-kick.gif'
        characterEn.style.height = '300px'
        characterEn.style.width = '300px'
        setTimeout(function(){
            characterEn.src = 'enemy.gif'
            characterEn.style.height = '250px'
            characterEn.style.width = '250px'
        },700)
    }
}
window.onkeydown=abc
