let bDoExportSvg = false;
let lineCount1 = 50;
let lineCount2 = 100;
let lineCount3 = 50;


function setup() {
  createCanvas(600, 800);
  noLoop();
  
}

function draw() {
    
  if (bDoExportSvg) {
    beginRecordSvg("myDrawing.svg");
  }

  background(255);
  noFill();
  stroke(0, 0, 0, 90);
  strokeWeight(0.55);

  for (let i = 0; i < lineCount1; i++) {

    let t = i / (lineCount1 - 1);

    let x1 = lerp(-50, 500, t);
    let y1 = lerp(-80, 150, t);

    let x2 = lerp(600, 250, t);
    let y2 = lerp(800, 800, t);

    let randomStart = random(-0.1, 0.1);
    let randomEnd = random(0.8, 1.2);

    
    beginShape();

    for (let j = 0; j <= 100; j++) {
      let u = lerp(randomStart, randomEnd, j/50);

      let x = lerp(x1, x2, u);
      let y = lerp(y1, y2, u);

      let offset = sin(u * PI) * 50;

      x = x + offset;

      vertex(x, y);
    }

    endShape();
 }

 for (let i = 0; i < lineCount2; i++) {

    let t = i / (lineCount2 - 1);

    let x3 = lerp(550, 600, t);
    let y3 = lerp(300, 700, t);

    let x4 = lerp(300, 0, t);
    let y4 = lerp(750, 750, t);

    let randomStart = random(-0.1, 0.1);
    let randomEnd = random(1.5, 2);

    
    beginShape();

    for (let j = 0; j <= 50; j++) {
      let u = lerp(randomStart, randomEnd, j/50);

      let x = lerp(x3, x4, u);
      let y = lerp(y3, y4, u);

      let offset = sin(u * PI) * 10;

      x = x + offset;

      vertex(x, y);
    }

    endShape();
}

for (let i = 0; i < lineCount3; i++) {

    let t = i / (lineCount3 - 1);

    let x5 = lerp(500, 400, t);
    let y5 = lerp(400, 280, t);

    let x6 = lerp(100, 450, t);
    let y6 = lerp(800, 800, t);

    let randomStart = random(-0.1, 0.1);
    let randomEnd = random(0.9, 1.0);

    beginShape();

    for (let j = 0; j <= 100; j++) {

    let u = lerp(randomStart, randomEnd, j / 100);

    let x = lerp(x5, x6, u);
    let y = lerp(y5, y6, u);

    let offset = sin(u * PI) * 100;

    y = y + offset;

    vertex(x, y);
   }

endShape();
}

if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

function keyPressed() {
    if (key == 's') {
    bDoExportSvg = true;
    redraw()
  }
}

