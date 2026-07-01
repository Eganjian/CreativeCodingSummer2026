let lineBrushBool = false
let ellipseBrushBool = false
let ball

function preload(){
ball = loadImage('Images/tennisball.png')
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	background(255)
}


function draw(){
	textSize(20)
	fill (0,0,0)
	text("press l for line", 10,20)
	text("press s for sketch", 10, 40)
	text("press b for a ball", 10, 60)
	if(lineBrushBool == true){
		lineBrush()
	}

	if(ellipseBrushBool == true){
		ellipseBrush()
	}
}


//line brush
function lineBrush(){
//pencil for drawing 
	stroke(random(255),random(255),random(255))
	strokeWeight(5)
	if(mouseIsPressed){
		line(pmouseX, pmouseY, mouseX, mouseY);
	}

}


//ellipse brush
function ellipseBrush(){
	if(mouseIsPressed){
		//sun
		fill(255, 230, 0);
		ellipse(420, 70, 100, 100);
		noStroke()

  //green below house (grass)
		fill(50, 200, 80);
		rect(0, 350, 500, 150);
		noStroke()

  // the house itself
		fill(255, 150, 100);
		rect(150, 200, 200, 160);
		noStroke()

  // traingle roof
		fill(180, 60, 40);
		triangle(130, 200, 250, 100, 370, 200);
		noStroke()

  // door + knob
		fill(120, 70, 30);
		rect(230, 280, 40, 80);
		fill(255, 255, 0);
		ellipse(260, 320, 8, 8);
		noStroke()

  // rect for windows
		fill(100, 200, 255);
		rect(175, 230, 50, 50);
		fill(100, 200, 255);
		rect(275, 230, 50, 50);
		noStroke()

  // lines for window lines
		fill(255, 255, 255);
		rect(198, 230, 4, 50);
		rect(175, 253, 50, 4);
		rect(298, 230, 4, 50);
		rect(275, 253, 50, 4);
		noStroke();

  // rect for chimney
		fill(100, 50, 30);
		rect(310, 125, 30, 60);
		noStroke()

  // ellipse for the clouds
		fill(255);
		ellipse(80, 80, 40, 40);
		ellipse(110, 70, 50, 50);
		ellipse(140, 80, 40, 40);
		noStroke()

  // rect for the path
		fill(200, 180, 120);
		rect(225, 360, 50, 140);
		noStroke()
	}

}


function keyPressed(){
	//key presses flip boolaeans 
	if(key === 'l'){
		background(255)
		lineBrushBool = true
		ellipseBrushBool = false
	}
	if (key === "s"){
		background(255)
		lineBrushBool = false
		ellipseBrushBool = true
	}
	if(key === 'c'){
		lineBrushBool= false
		ellipseBrushBool = false 
		background(255)
	}
	if(key === "b"){
		image(ball,windowWidth/2, windowHeight/2, 50, 50)
	}
}




