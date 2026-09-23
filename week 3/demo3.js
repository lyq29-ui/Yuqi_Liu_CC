
let w, h;
let numRects = 10;

function setup() {

    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    w = windowWidth / numRects;
    h = windowHeight / numRects;

    background(0);
    noStroke();
}

function draw() {

    background(9, 21, 64);

    for (let x = 0; x < numRects; x++) {
        for (let y = 0; y < numRects; y++) {

           
            let d = dist(mouseX, mouseY, w * x + w / 2, h * y + h / 2);

            d = map(d, 0, 350, 1, 0);
            d = constrain(d, 0, 1);

          
            let w1 = map(d, 0, 1, w, 0);
            let r = map(d, 0, 1, 5, 80);
            let g = map(d, 0, 1, 25, 200);
            let b = map(d, 0, 1, 80, 255);
            fill(r,g,b)

            push();
            translate(w * x + w / 2, h * y + h / 2);
            rect(0, 0, w1, h);
            pop();
        }
    }
}