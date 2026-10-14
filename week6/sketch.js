
let frames = []
let dancers = []
let xLoc = []
let yLoc = []
let Mysound;
let startframe = 0;


async function setup(){
  createCanvas(1500, 700)
  frameRate(3);
  imageMode(CENTER)

  for(let i = 1; i<=35; i++){
    frames[i-1] = await loadImage('dance_image/' + i + '.png')
  }


  Mysound = await loadSound('Mysound.mp3')

 print(frames)

}

function draw(){
  background(255)

  let img = frames[(frameCount - startframe) % frames.length]

  for (let i = 0; i < xLoc.length; i++){
    image(img, xLoc[i], yLoc[i], 100,110)
  }
  
}

function keyPressed(){
  if (key === ' '){
  
    if(xLoc.length == 0){
      startframe = frameCount
    }

    let i = xLoc.length
    xLoc[i] = random(50, width-50)
    yLoc[i] = random(55, height-55)

    if (!Mysound.isPlaying()){
      Mysound.loop();
    }
    

  }
}
