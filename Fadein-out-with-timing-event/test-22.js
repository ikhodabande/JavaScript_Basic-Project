let ID;
let intervalID;
function fadeOut(){
   ID = setInterval(hide,20)
}
function hide(){
    let img = document.getElementById('img1')
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity>0){
        opacity = opacity - 0.01;
        img.style.opacity = opacity
    }
    else{
        clearInterval(ID)
    }
}
function fadeIn(){
    intervalID = setInterval(show,20)
}
function show(){
    let img = document.getElementById('img1')
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity<1){
        opacity = opacity + 0.01;
        img.style.opacity = opacity
    }
    else{
        clearInterval(intervalID)
    }
}