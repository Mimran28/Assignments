var doc1 = document.getElementById('post_container')
var doc2 = document.getElementById('create_container')
var create =document.getElementById('create_body')
var textArea = document.getElementById('text_area')
var heading = document.getElementById('content')
var valOf = ''

function changeBackground(val){
    valOf = val;
  
    if(val === 'd6.webp' || val === 'd5.jpg'){
        create.children[0].style.color = 'white'
    }
    else{
        create.children[0].style.color = 'black'
    }
create.style.backgroundImage = `url(${val})`
}

function submit(){
    doc2.style.display = 'none'
    doc1.style.display = 'block'
    console.log(valOf)
    if(valOf === 'd6.webp' || valOf === 'd5.jpg'){
        heading.style.color = 'white'
    }
    else{
        heading.style.color = 'black'
    }

    var doc  = document.getElementById('post_body');
    console.log(doc.style.backgroundImage)
    var createImage = create.style.backgroundImage
    doc.style.backgroundImage = `${createImage}`
 
    heading.innerHTML = textArea.value

}
function post(){
    doc2.style.display = 'block'
    doc1.style.display = 'none'
    textArea.value = ''
}