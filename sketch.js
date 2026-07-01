let racket
let ball
let rabbit
let mailbox


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235);

}

function preload(){
  //folder/name of image
racket = loadImage('Images/tennisracket.png')
ball = loadImage('Images/tennisball.png')
rabbit = loadImage('Images/rabbit.png')
mailbox = loadImage('Images/mailbox.png')
}

function draw(){
background(135, 206, 235);
  //sun
  fill(255, 230, 0);
  ellipse(420, 70, 100, 100);
  noStroke

  //green below house (grass)
  fill(50, 200, 80);
  rect(0, 350, 500, 150);
  noStroke

  // the house itself
  fill(255, 150, 100);
  rect(150, 200, 200, 160);
  noStroke

  // traingle roof
  fill(180, 60, 40);
  triangle(130, 200, 250, 100, 370, 200);
  noStroke

  // door + knob
  fill(120, 70, 30);
  rect(230, 280, 40, 80);
  fill(255, 255, 0);
  ellipse(260, 320, 8, 8);
  noStroke

  // rect for windows
  fill(100, 200, 255);
  rect(175, 230, 50, 50);
  fill(100, 200, 255);
  rect(275, 230, 50, 50);
  noStroke

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
  noStroke

  // ellipse for the clouds
  fill(255);
  ellipse(80, 80, 40, 40);
  ellipse(110, 70, 50, 50);
  ellipse(140, 80, 40, 40);
  noStroke

  // rect for the path
  fill(200, 180, 120);
  rect(225, 360, 50, 140);
  noStroke

  image(racket,windowWidth/3, windowHeight/3, 50,50)
  image(ball,350, 300, 50, 50)
  image(rabbit,windowWidth/6, windowHeight/6, 50,50)
  image(mailbox, 250, 380, 80,80)
}
