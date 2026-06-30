let racket
let ball


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235);

}

function preload(){
  //folder/name of image
racket = loadImage('Images/tennisracket.png')
ball = loadImage('Images/tennisball.png')
}

function draw(){

  //sun
  fill(255, 230, 0);
  ellipse(420, 70, 80, 80);

  //green below house (grass)
  fill(50, 200, 80);
  rect(0, 350, 500, 150);

  // the house itself
  fill(255, 150, 100);
  rect(150, 200, 200, 160);

  // traingle roof
  fill(180, 60, 40);
  triangle(130, 200, 250, 100, 370, 200);

  // door + knob
  fill(120, 70, 30);
  rect(230, 280, 40, 80);
  fill(255, 255, 0);
  ellipse(260, 320, 8, 8);

  // rect for windows
  fill(100, 200, 255);
  rect(175, 230, 50, 50);
  fill(100, 200, 255);
  rect(275, 230, 50, 50);

  // lines for window lines
  fill(255, 255, 255);
  rect(198, 230, 4, 50);
  rect(175, 253, 50, 4);
  rect(298, 230, 4, 50);
  rect(275, 253, 50, 4);
  noStroke;

  // rect for chimney
  fill(100, 50, 30);
  rect(310, 125, 30, 60);

  // ellipse for the clouds
  fill(255);
  ellipse(80, 80, 40, 40);
  ellipse(110, 70, 50, 50);
  ellipse(140, 80, 40, 40);

  // rect for the path
  fill(200, 180, 120);
  rect(225, 360, 50, 140);

  image(racket,windowWidth/4, windowHeight/3, 50,50)
  image(ball,windowWidth/3, windowHeight/2, 50, 50)
}
