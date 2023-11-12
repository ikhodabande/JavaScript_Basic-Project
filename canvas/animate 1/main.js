let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

class Ball {
    constructor(x,y){
        this.baseR = 10
        this.r = this.baseR
        this.x = x || randomIntFromInterval(0+this.r,window.innerWidth-this.r) || 20
        this.y = y || randomIntFromInterval(0+this.r,window.innerHeight-this.r) || 20
        this.vx = (Math.random() - 0.5)
        this.vy = (Math.random() - 0.5)
        this.draw()
    }

    draw(){

        c.beginPath()
        c.arc(this.x,this.y,this.r,0,2 * Math.PI)
        c.fillStyle = "green"
        c.fill()
    }

    update(){

        if(this.x+this.r > window.innerWidth || this.x-this.r < 0){
            this.vx = -this.vx
        }

        if(this.y+this.r > window.innerHeight || this.y-this.r < 0){
            this.vy = -this.vy
        }

        this.x += this.vx
        this.y += this.vy

        this.draw()
    
    }
}
// here you can add how many balls should we have on screen (in this example is 90 balls)
let balls = []
for(let i=0;i<90;i++){
    balls.push(new Ball)
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    balls.forEach(ball=>{
        ball.update()
    });
    requestAnimationFrame(animate);
}

// add ball with mouse click in where we click the coursur

window.addEventListener("click",function(e){
    balls.push(new Ball(e.clientX,e.clientY))
})

// grow the size off ball wich is next to the mouse coursur

window.addEventListener("mousemove",function(e){
    balls.forEach(ball=>{
        let distance = Math.sqrt( Math.pow(e.clientX - ball.x,2) + Math.pow(e.clientY - ball.y,2))
        if(ball.r < ball.baseR*20 && distance < 10 ){
            ball.r += 1
        }else if(ball.r > ball.baseR){
            ball.r -= 1
        }
    })
})

//responsive balls 
window.addEventListener("resize",function(e){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

animate()


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
