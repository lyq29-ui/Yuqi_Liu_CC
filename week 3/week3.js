let r=0

function setup(){
    createCanvas(1000, 1000);
    background(0)
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    noFill();
    strokeWeight(2);
    stroke(255)

    translate(mouseX,0)
    push();
    translate(width/2-200, height/2);
    rotate(r);
    rect(0, 0, 50);

    line(0,0,0,200)

    translate(0, 200);
    rotate(r);
    rect(0, 0, 50);

    line(0,0,0,200)
    translate(0, 200);
    rotate(r);
    rect(0, 0, 50);

    pop()
    translate(width/2,3*height/4)
    rect(0,0, 400, height/2);
    rect(0,0, 50, 80);
    r++

}
