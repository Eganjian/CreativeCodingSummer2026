
let furby

// image function: first make it a variable
function preload(){
	//folder/name of image
	furby = loadImage('Images/furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
 // random 100 ellipse drawn once
	//for(let i = 0; i<100; i++){
	//ellipse(random(windowWidth), random (windowHeight), 20, 20)
//}
}

function draw (){
	//background(255)

// I is a value and starts a 0. When it is less than the window width, it will draw a line and then 10 will be added to 1 and it will run until i is less than the window width
// up to down
	//for(let i = 0; i < windowWidth; i = i+10){
		//line(i, 0, i,windowHeight)
	//}
// side to side
	//for(let i = 0; i < windowHeight; i = i+10){
		//line(0,i,windowWidth, i)
	//}
//random 1000 ellipse that will continue to be drawn (like a loop)
	//for(let i = 0; i<50; i++){
	//image(furby, random(windowWidth), random (windowHeight), 40, 40)
	//}

	//fill(0,0,255,100)
	//ellipse (windowWidth/2, windowHeight/2, 200, 200)
//noFill
}