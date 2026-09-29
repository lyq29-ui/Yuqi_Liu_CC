let bDoExportSvg = false;
let w, h;
let numRects = 10;

function setup() {

    createCanvas(1000, 1000);
    rectMode(CENTER);

    w = windowWidth / numRects;
    h = windowHeight / numRects;

    stroke(0);
}

function draw() {

    background(255);
    if (bDoExportSvg) {
    beginRecordSvg("myDrawing.svg");
  }

    for (let x = 0; x < numRects; x++) {
        for (let y = 0; y < numRects; y++) {

           
            let d = dist(mouseX, mouseY, w * x + w / 2, h * y + h / 2);

            d = map(d, 0, 500, 1, 0);
            d = constrain(d, 0, 1);

          
            let w1 = map(d, 0, 1, w, 0);
            let r = map(d, 0, 1, 0, 255);
            let g = map(d, 0, 1, 0, 255);
            let b = map(d, 0, 1, 0, 255);
            fill(r,g,b)
            
        
            push();
            translate(w * x + w / 2, h * y + h / 2);
            rect(0, 0, w1, h);
            pop();
        }
    }

    if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

function keyPressed() {
    if (key == 's') {
    bDoExportSvg = true;
  }
}