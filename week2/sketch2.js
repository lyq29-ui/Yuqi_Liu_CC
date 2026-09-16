let upper;
let under;

function setup(){ 
    createCanvas(700, 700); 
    
    under = createGraphics(1000, 1000); 
    under.background(150); 
    
    upper = createGraphics(1000, 1000); 
    upper.background(0); 
    
    strokeWeight(2); 

    for (let x = 0; x < 1000; x++) {
        let r = map(x, 0, 1000, 80, 225);
        let g = map(x, 0, 1000, 106, 118);
        let b = map(x, 0, 1000, 170, 146);

        under.stroke(r, g, b);
        under.line(x, 0, x, height);
    }
}

function draw(){ 
    image(under, 0, 0); 
    image(upper, 0, 0); 
}

function mouseDragged(){ 
    upper.erase(); 
    upper.strokeWeight(5); 
    upper.line(pmouseX, pmouseY, mouseX, mouseY); 
    upper.noErase(); 
}