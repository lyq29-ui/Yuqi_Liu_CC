let r=0
let lerpedMouseX=0
let lerpedMouseY=0


function setup(){
    createCanvas(1000, 1000);
    background(0)
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){

    lerpedMouseX=lerp(lerpedMouseX,mouseX,0.1)
    lerpedMouseX=lerp(lerpedMouseY,mouseY,0.1)

    push()
    translate(lerpedMouseX,lerpedMouseY);
    rect(0,0,50);
    pop()

    
}