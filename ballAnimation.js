let xPos 
let yPos
let balldiameter = 100
let furby

let xSpeed = 2
let ySpeed = 2

// image function: first make it a variable
function preload(){
	//folder/name of image
	furby = loadImage('Images/furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	imageMode(CENTER)
}

function draw(){
	background(27,194,227)
	fill(0)
	textSize(50)
	text("A bouncing Furby!", 80,100)
	//ball and the color
	fill(111,201,68)
	image(furby,xPos, yPos, balldiameter, balldiameter)

		// if the mouse is pressed, the ball would move
	//if(mouseIsPressed){
	//move ball
		xPos = xPos + xSpeed
		yPos = yPos + ySpeed
	//}


	if (xPos>= windowWidth - balldiameter/2 || xPos <= balldiameter/2){
		//reverse x Speed
		xSpeed = xSpeed * -1
	}

	if (yPos>= windowHeight - balldiameter/2 || yPos <= balldiameter/2){
		//reverse y Speed
		ySpeed = ySpeed * -1

	}
}