let y1 = 0;  
let y2 = 0;  
let y3 = 0;  
let y4 = 0;  
  
let yV1 = 7;  
let yV2 = 0;  
let yV3 = 0;  
let yV4 = 0;  

let flag1 = 1;
let flag2 = 1;
let flag3 = 1;
  
let x1 = 200;  
let x2 = 400;  
let x3 = 600;  
let x4 = 800;  
  
function setup() {  
    createCanvas(1000, 600);  
    noStroke();  
}  
  
function draw() {  
    
    let r = map(y1, 0, 520, 140, 255);
    let g = map(y1, 0, 520, 100, 80);
    let b = map(y1, 0, 520, 150, 40);

    fill(r,g,b);
    
    rect(x1 - 200, y1, 250, 80);  
    rect(x2 - 150, y2, 250, 80);  
    rect(x3 - 100, y3, 250, 80);  
    rect(x4 - 50, y4, 250, 80);  


    y1 = y1 + yV1; 
    y2 = y2 + yV2;
    y3 = y3 + yV3;
    y4 = y4 + yV4;

    if (y1 > 600) { 
      yV1 = -yV1; 
    } 
    if (y1 < 0){
      yV1 = -yV1;
    }
 
    if (y1 > 50 & flag1 == 1) { 
      yV2 = 7;
      flag1 = 0;
    } 

    if (y2 > 600) { 
      yV2 = -yV2; 
    } 
    if (y2 < 0){
      yV2 = -yV2;
    }
 
    if (y2 > 50 & flag2 == 1) { 
      yV3 = 7;
      flag2 = 0;
    }
    
    
    if (y3 > 600) { 
      yV3 = -yV3; 
    } 
    if (y3 < 0){
      yV3 = -yV3;
    }
 
    if (y3 > 50 & flag3 == 1) { 
      yV4 = 7;
      flag3 = 0;
    } 
 

    if (y4 > 600) { 
        yV4 = -yV4; 
    } 
    if (y4 < 0){
      yV4 = -yV4;
    }
}