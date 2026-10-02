//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		if(!this.playbackButton.hitCheck()){
			var fs = fullscreen();
			fullscreen(!fs);
		}
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

//Arrow Keys to change to the next visulization
		if(keycode == 39){
			// Get the index of the current visualization
			let currentIndex = vis.visuals.indexOf(vis.selectedVisual);
			
			// Only move to the next visualization if not at the last one
			if(currentIndex < vis.visuals.length - 1){
				let nextIndex = currentIndex + 1;
				vis.selectVisual(vis.visuals[nextIndex].name);
			}
		}

		// Navigate to the previous visualization on left arrow key press (keycode 37)
		if(keycode == 37){
			// Get the index of the current visualization
			let currentIndex = vis.visuals.indexOf(vis.selectedVisual);
			
			// Only move to the previous visualization if not at the first one
			if(currentIndex > 0){
				let prevIndex = currentIndex - 1;
				vis.selectVisual(vis.visuals[prevIndex].name);
			}
		}


	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();

		if(this.menuDisplayed){
		var r = random(0, 25);
		var g = random(0, 0);
		var b = random(0, 125);
		strokeWeight(6);
		stroke(r, g, b);
		fill(100); // Light grey fill
		rect(90, 5, 440, vis.visuals.length * 40 + 70, 10);
		}

		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 50);
			this.menu();
		}	
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		for(var i = 0; i < vis.visuals.length; i++){
			var yLoc = 90 + i*40;
			text((i+1) + ":  " +vis.visuals[i].name, 100, yLoc);
		}
	};
}

