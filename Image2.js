// furby (image) variable 

let racket
let ball


// image function: first make it a variable
function preload(){
	//folder/name of image
racket = loadImage('Images/tennisracket.png')
ball = loadImage('Images/tennisball.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	background(255,255,255)
}

function draw(){
	// if you get rid of it, the image will overlap when you use mouseX and mouseY
	background(255,255,255)
	// this chnages color when the mouse is pressed 
	// if(mouseIsPressed == true){
	// 	background(255,0,0)
	// }else{
	// 	background(0,0,255)
	// }

	// this changes color when any key is pressed 
	// if(keyIsPressed == true){
	// 	background(255,0,0)
	// }else{
	// 	background(0,0,255)
	//}

	// text size and adding text 
	//textSize(20)
	//text('hi', 200,200)
		//loads the image to the center of the screen
	image(racket,windowWidth/3, windowHeight/3, 50,50)
	image(ball,windowWidth/2, windowHeight/2, 50, 50)
	
} 