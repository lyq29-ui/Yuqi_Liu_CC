
let frames1 = []
let frames2 = []
let xLoc = 0, yLoc = 0;
// let xLoc_jump = 0, yLoc_jump = 0;

async function setup(){
  createCanvas(1500,700)
  frameRate(12);
  imageMode(CENTER)

  
  for(let i = 1; i<=10; i++){
    frames1[i-1] = await loadImage('running_image/' + i + '.png')
  }

 print(frames1)


  for(let j = 1; j<=12; j++){
    frames2[j-1] = await loadImage('jump_image/' + j + '.png')
  }

 print(frames2)

}


let counter = 0
let jump_counter = 0
let dir = 1
let isJumping = false;
let jumpStage = 0;

function draw(){
  background(249, 180, 220)

//   let img1 = frames1[counter % frames1.length]

//   if(keyIsPressed){
//     if(key == 'd'){
//     xLoc += 7.5;
//     counter++
//     dir = 1
//     }
//     else if(key == 'a'){
//     xLoc -= 7.5;
//     counter++
//     dir = -1
//     }
//   }

//   push();

//   translate(width / 2 + xLoc, height / 2);
//   scale(dir,1);
//   image(img1, 0, 0, 150, 200);

//   pop();


  let img;

  if (isJumping){
    img = frames2[jump_counter % frames2.length];
    jump_counter++;

    if (jumpStage == 0){
        xLoc += 30;
        yLoc -= 8;

        if (yLoc <= -48){
            jumpStage = 1;
        }
    }
    else if (jumpStage == 1){
        xLoc += 30;
        yLoc += 8;

        if (yLoc == 0){
            isJumping = false;
            jumpStage = 0;
        } 
    }
  }
  else {
    if (keyIsPressed) {
        if (key == 'd') {
        xLoc += 10;
        counter++;
        dir = 1;
        }

        else if (key == 'a') {
        xLoc -= 10;
        counter++;
        dir = -1;
        }
    }
    img = frames1[counter % frames1.length];

  }



  push();

  translate( 100+xLoc, height / 2 + yLoc);
  scale(dir,1);
  image(img, 0, 0, 150, 200);

  pop();



  rect(0, 438, 500, 400)
  rect(800, 438, 500, 400)
  rect(1400, 200, 100, 200)
  fill(15, 52, 96)
  noStroke()

  if(dist(100+xLoc, height / 2 + yLoc, 1450, 300)<50){
    window.location.href=('../index.html')  
  }

}

function keyPressed() {

  if (key == 'w') {
    isJumping = true;
    jumpStage = 0;
    jump_counter = 0;
    dir = 1;
  }
  
 
}

