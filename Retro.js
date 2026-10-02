function Retro(){
    
    //vis name
	this.name = "Vintage Retro Casette";
    this.x = 0;
    this.y = 0;
    this.notes = [];

    this.draw=function(){
        push();
        //draw function for the retro speaker
        this.casette();

        //drawing and musical mapping of the decks
        this.spinningDeck();

        //drawing the smoothed waveforms
        this.drawFrequencyGraph();

        //drawing and functionality of the music note
        this.updateAndDrawNotes();
        pop();
    }

    this.casette=function(){
    // handle
    noFill();
    strokeWeight(15);
    stroke(250, 0, 208);
    rect(this.x + windowWidth/2.5, this.y + windowHeight/4.4, 340, 100);
    strokeWeight(5);
    stroke(255);
    rect(this.x + windowWidth/2.5, this.y + windowHeight/4.4, 340, 100);

    // BODY
    noFill();
    strokeWeight(15);
    stroke(250, 0, 208);
    rect(this.x + windowWidth/4, this.y + windowHeight/3, 800, 400, 50);
    strokeWeight(5);
    stroke(255);
    rect(this.x + windowWidth/4, this.y + windowHeight/3, 800, 400, 50);

    // screws
    noFill();
    strokeWeight(15);
    stroke(225, 245, 7);
    ellipse(this.x + 430, this.y + 365, 40, 40);
    ellipse(this.x + 430, this.y + 665, 40, 40);
    ellipse(this.x + 1130, this.y + 365, 40, 40);
    ellipse(this.x + 1130, this.y + 665, 40, 40);
    strokeWeight(5);
    stroke(255);
    ellipse(this.x + 430, this.y + 365, 40, 40);
    ellipse(this.x + 430, this.y + 665, 40, 40);
    ellipse(this.x + 1130, this.y + 365, 40, 40);
    ellipse(this.x + 1130, this.y + 665, 40, 40);

    // graph box
    noFill();
    strokeWeight(15);
    stroke(7, 245, 233);
    rect(this.x + windowWidth/2.4, this.y + windowHeight/2.5, 290, 150);
    strokeWeight(5);
    stroke(255);
    rect(this.x + windowWidth/2.4, this.y + windowHeight/2.5, 290, 150);

    // speaker
    // speakers scaled based on frequency
    var freq = fourier.analyze();
    var level = fourier.getEnergy('bass');

    var speakerSize = map(level, 0, 255, 180, 280); 

    noFill();
    strokeWeight(15);
    stroke(245, 94, 7);
    ellipse(this.x + 505, this.y + 495, speakerSize, speakerSize);
    ellipse(this.x + 1050, this.y + 495, speakerSize, speakerSize);
    strokeWeight(5);
    stroke(255);
    ellipse(this.x + 505, this.y + 495, speakerSize, speakerSize);
    ellipse(this.x + 1050, this.y + 495, speakerSize, speakerSize);

    }

    this.spinningDeck=function(){

    var freq = fourier.analyze();
    var level = fourier.getEnergy('bass');

    // Rotate decks based on bass level of the music
    var spin = map(level, 0, 255, 0, TWO_PI);

    // Draw left deck
    push();
    translate(this.x + 505, this.y + 495);
    rotate(spin);
    strokeWeight(10);
    line(-65, 0, 65, 0);
    line(0, -65, 0, 65);
    strokeWeight(15);
    stroke(78, 245, 7);
    ellipse(0, 0, 130, 130);
    strokeWeight(5);
    stroke(255);
    ellipse(0, 0, 130, 130);
    pop();

    // Draw right deck
    push();
    translate(this.x + 1050, this.y + 495);
    rotate(spin);
    strokeWeight(10);
    line(-65, 0, 65, 0);
    line(0, -65, 0, 65);
    strokeWeight(15);
    stroke(78, 245, 7);
    ellipse(0, 0, 130, 130);
    strokeWeight(5);
    stroke(255);
    ellipse(0, 0, 130, 130);
    pop();
    }

    this.drawFrequencyGraph = function(){

    var waveform = fourier.waveform();
    var length = waveform.length;
    var graphWidth = 290;
    var graphHeight = 150;
    var space = graphWidth / length;

    // Calculating the average value for the waveform to make a smoother wave
    var smoothedWaveform = [];
    var smoothnessLevel = 5; 

    for (var i = 0; i < length; i++) {
        var sum = 0;
        var count = 0;
        for (var j = -smoothnessLevel; j <= smoothnessLevel; j++) {
            var index = i + j;
            if (index >= 0 && index < length) {
                sum += waveform[index];
                count++;
            }
        }
        smoothedWaveform[i] = sum / count;
    }

    push();
    translate(this.x + windowWidth / 2.4, this.y + windowHeight / 2.5);

    //adding color in between the two waveforms
    fill(171, 74, 26);
    strokeWeight(2);

    beginShape();
    for (var i = 0; i < length; i++) {
        var x = i * space;
        var y = map(smoothedWaveform[i], -1, 1, graphHeight, 0);
   
        //color and weight of stroke
        strokeWeight(4);
        stroke(255, 3, 234, 150);
        vertex(x, y);
    }
    endShape();

    // Mirrorring the waveform below 
    beginShape();
    for (var i = 0; i < length; i++) {
        var x = i * space;
        var y = map(smoothedWaveform[i], -1, 1, 0, graphHeight);
        
        //color and weight of stroke
        strokeWeight(4);
        stroke(255, 3, 234, 150);
        vertex(x, y);
    }
    endShape();

    pop();
    }

    this.updateAndDrawNotes = function() {
    var bassLevel = fourier.getEnergy('bass');
    var amplitude = bassLevel / 255;
    var timeGap = 20;

    //conditional statements to check the number of the notes and time to generate new notes
    if (frameCount % timeGap == 0) {
    if (this.notes.length < 20) {
        //random x position of the note 
        var xPos = random() > 0.5 ? this.x + 505 : this.x + 1050;

        //setting properties for the note position,size and speed
        var note = {
            x: xPos,
            y: this.y + 495,
            dx: random(-1, 1),
            dy: random(-1, -0.5),
            size: 1, 
            speed: 1
        };
        this.notes.push(note);
    }
    }

    for (var i = this.notes.length - 1; i >= 0; i--) {
        var note = this.notes[i];

        //implementing music amplitude in the the speed and size of the note 
        note.speed = map(amplitude, 0, 1, 1, 5);
        note.size = map(amplitude, 0, 1, 0.5, 2);

        note.x += note.dx * note.speed;
        note.y += note.dy * note.speed;

        // Draw the scaled note
        push();
        translate(note.x, note.y);
        scale(note.size);
        var a = random(0, 255);
        var b = random(0, 255);
        var c = random(0, 255);

        fill(a, b, c);
        noStroke();
        rect(0, 0, 40, 5);
        rect(0, 0, 3, 35);
        rect(40, 0, 3, 30);
        ellipse(-3, 37, 14, 14);
        ellipse(40 - 3, 32, 14, 14);
        pop();

        // Removing the note off the scrren if the note goes out of the canvas
        if (note.x < 0 || note.x > windowWidth || note.y < 0 || note.y > windowHeight) {
            this.notes.splice(i, 1);
        }
    }
    }


}