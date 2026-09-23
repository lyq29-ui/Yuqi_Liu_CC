let numEllipse = 80;

let x = [];
let y = [];

let color = [];
let colors = [ [171, 210, 250], [118, 146, 255], [27, 44, 193], [255, 150, 100]

        ];

let flag = 0;

function setup() {
    createCanvas(1000, 500);

    noStroke();
    fill(255);

    for (let i = 0; i < numEllipse; i++) {

        x[i] = random(width);
        y[i] = random(height - 120, height - 10);

        color[i] = random(colors);
    }
}

function draw() {
    background(0, 0, 0, 50);
    if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 500) {

        flag = 1;
    }
    else {
        flag = 0;
    }
   
    for (let i = 0; i < numEllipse; i++) {

        if (flag == 1) {

            if (i == 0) {

                x[i] = lerp(x[i], mouseX, 0.1);
                y[i] = lerp(y[i], mouseY, 0.1);

            } else{
                x[i] = lerp(x[i], x[i - 1], 0.08);
                y[i] = lerp(y[i], y[i - 1], 0.08);
            }
        }

        else{
            y[i] = y[i] + 2;

            if (y[i] > height - 15 / 2){
                y[i] = height - 15 / 2;
            }
        }

       
        fill(color[i]);
        ellipse(x[i], y[i], 15, 15);
        
    }
}