let handPose;
let video;
let hands = [];
let Mysound;
let amount = 0;

function preload() {
  handPose = ml5.handPose(); 
  soundFormats('mp3');
  mySound = loadSound('music.mp3');
}

async function setup() {

  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

 
  handPose.detectStart(video, gotHands);



  pixelDensity(1);
}



function draw() {
  // background(0, 70);

 

  if (hands.length > 0){
    let hand = hands[0];
    let thumb = hand.keypoints[4];
    let finger = hand.keypoints[8];
    let distance = dist(thumb.x, thumb.y, finger.x, finger.y);
    amount = map(distance, 20, 120, 1, 0);
    
  }

  let volume = map(amount, 0, 1, 0.2, 1);
  mySound.setVolume(volume, 0.1);

  scale(-1,1)
  translate(-width,0)
  image(video, 0, 0, width, height);


  loadPixels();
  let index = 0

  for( let y = 0; y<height; y++){ 
    for(let x = 0; x<width; x++){

    let d = dist(x, y, width / 2, height / 2);
    let radius = 200 
    let difference = abs(d - radius)*2;
    let chance = map(difference, 0, 200, 0.9, 0);
    
    if (d > radius){
        chance = 0.01;
    }

    if (d < radius){
        chance = max(chance, amount * 0.8);
    }
    
    let c = 0;
      if (random(1) < chance) {
        c = random(100, 255);
      }
    

    pixels[index] = c
    pixels[index+1] = c
    pixels[index+2] = c
    pixels[index+3] = 255
    index+=4
    }
  }

  updatePixels();



  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      // fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }

}

function gotHands(results) {
  hands = results;
}

function mousePressed() {

  if (!mySound.isPlaying()) {
    mySound.loop();
  }
}