let intervalID;
let width = 500;
let unit = 5;
function increase(){
 intervalID = setInterval(expand,20)   
}
function expand(){
    if(width < 700){
        width = width + unit;
        document.getElementById('img1').width = width
    }else{
        clearInterval(intervalID)
    }
}
function decrease(){
    intervalID = setInterval(shrink,20)
}
function shrink(){
    if(width > 500){
        width = width - unit ;
        document.getElementById('img1').width = width
    }else{
        clearInterval(intervalID)
    }
}