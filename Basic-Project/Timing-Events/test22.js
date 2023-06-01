// let ID;
// function printMessage(){
//     document.getElementById('message').innerText ="this h2 apear after 5 second"
// }
// function start(){

//   ID =  window.setTimeout(printMessage,5000)    
// }

// function stop(){
//     window.clearTimeout(ID)
// }

let ID;
let second = 0;
function printMessage(){
    document.getElementById('message').innerHTML = second + 'second'
    second ++;
}
function start(){
   ID = window.setInterval(printMessage,1000)
}
function stop(){
    window.clearInterval(ID)
}