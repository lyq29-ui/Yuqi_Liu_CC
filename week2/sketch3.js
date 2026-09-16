let x1, y1;
let diameter1 = 70
let y1V = 3.5, x1V = 5.5

let x2, y2;
let diameter2 = 70
let y2V= -6, x2V=-3.5;

function setup(){
    createCanvas(700,700);
    y1 = diameter1/2;
    x1 = width/2;

    y2 = 400;
    x2 = 400;

}

    
function draw(){
  background(254, 190, 70,40);
  ellipse(x1,y1, diameter1);
  ellipse(x2,y2, diameter2);
  noStroke();

  let r1 = map(y1, 0, 700, 138, 231);
  let g1 = map(x1, 0, 700, 140, 150);
  let b1 = map(y1, 0, 700, 1091, 95);
  fill(r1, g1, b1);
  ellipse(x1, y1, diameter1); 

  let r2 = map(y2, 0, 700, 20, 146);
  let g2 = map(x2, 0, 700, 100, 188);
  let b2 = map(x2, 0, 700, 200, 198);
  fill(r2, g2, b2);
  ellipse(x2, y2, diameter2); 
    

  x1 += x1V
  y1 += y1V
  x2 += -x2V
  y2 += -y2V

  if(y1 > height - diameter1/2){
    y1V = -y1V;
  }
  if(y1 < diameter1/2 ){
    y1V = -y1V;
  }
  if(x1>width- diameter1/2){
    x1V = -x1V
  }
  if(x1 < diameter1/2){
    x1V = -x1V
  }

   if(y2 > height - diameter2/2){
    y2V = -y2V;
  }
  if(y2 < diameter2/2 ){
    y2V = -y2V;
  }
  if(x2>width- diameter2/2){
    x2V = -x2V
  }
  if(x2 < diameter2/2){
    x2V = -x2V
  }

let distance = dist(x1, y1, x2, y2); 

if (distance < (diameter1/2 + diameter2/2)) {
    x1V = -x1V+0.5;
    y1V = -y1V;
    x2V = -x2V;
    y2V = -y2V;

}
}