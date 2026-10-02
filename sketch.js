//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

function preload(){
	sound = loadSound('assets/lalala.mp3');
}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();
     amplitude = new p5.Amplitude();

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new introPage());
	 //New visulisations added below
     vis.add(new Skull());
     vis.add(new Ballerina());
     vis.add(new CoffeeCup());
     vis.add(new FractalTree());
     vis.add(new HangingLines());
     vis.add(new Disco());
     vis.add(new Retro());
     vis.add(new Rectangle());

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
