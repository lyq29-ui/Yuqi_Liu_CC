let numEllipse = 30;

let x = [];
let y = [];

function setup() {
    createCanvas(1000, 500);

    noFill();
    stroke(255);

    for (let i = 0; i < numEllipse; i++) {
        x[i] = random(width);
        y[i] = random(height);
    }
}

function draw() {
    background(9, 21, 64, 50);

    for (let i = 0; i < numEllipse; i++) {
        let diameter = map(y[i], height, 0, 40, 10);
        let distance = dist(mouseX, mouseY, x[i], y[i]);
        if ( distance < diameter ){
            fill(0, 255, 255);
            stroke(0, 255, 255)
        }
        else {
            noFill()
            stroke(255)
        }

        ellipse(x[i], y[i], diameter, diameter);
        fill(0, 255, 255)

        y[i] = y[i] - 1;
        x[i] = x[i] - 2;

        if (x[i] < 0) {
            y[i] = random(height);
            x[i] = width;
        }
    }

    
}
