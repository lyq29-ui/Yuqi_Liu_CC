let bDoExportSvg = false;
let wavesPerCanvas = 2
let mapLitude = 10;
let offset = 0;
let yLoc;
let speed = 0.01
let numWave = 10;

function setup(){
    createCanvas(1000,1000);
    yLoc = height/2
    noFill()
   

}

function draw(){
    background(255)
    if (bDoExportSvg) {
    beginRecordSvg("myDrawing.svg");
  }

    sinWave(4, 150, height/2, 0.05)
    sinWave(8, 80, height*0.8, 0.2)

    for (let i = 0; i < numWave; i++){

        let yLoc = map(i, 0, numWave, 0, 1)*height
        sinWave(i, 80, yLoc, 0.1)
    }
    nShape = (mouseX, mouseY, 8, 50)

    if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }


}

function sinWave(wavesPerCanvas, ampLitude, yLoc, speed){

    let offset = frameCount * speed
    push()
    translate(0, yLoc)
    beginShape()
    for (let i = 0; i < width; i++){
        mappedI = map(i, 0, width, 0, wavesPerCanvas*TWO_PI)
        let y = sin(mappedI-offset)*ampLitude

        let x = i 
        vertex(x, y)
    }
    endShape()
    pop()

}


function nShape(yLoc, xLoc, numVertices, radius){


    
    push()
    beginShape()
    translate (xLoc, yLoc)
    for(let i = 0; i < numVertices; i++){
        let mappedI = map(i, 0, numVertices, 0, TWO_PI)
    let x = sin(mappedI)*radius
    let y = cos(mappedI)*radius
        
           vertex(x, y)
         
    endShape(CLOSE)  
    pop()

    }
}

function keyPressed() {
    if (key == 's') {
    bDoExportSvg = true;
  }
}

