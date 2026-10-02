function Disco() {
    this.name = "Dancing Emotions";
    this.x = width / 2;
    this.y = height / 6;
    this.diameter = 300;
    this.image = loadImage("assets/discoBall.png");

    //frequency ranges for each stickman
    this.freqRanges = [
        { min: 0, max: 70 },  
        { min: 70, max: 120 }, 
        { min: 120, max: 190 }, 
        { min: 190, max: 240 }, 
        { min: 240, max: 320 } 
    ];

    //jump states for each stickman
    this.jumpStates = [false, false, false, false, false];

    //spotlight states for each stickman
    this.spotlightStates = [false, false, false, false, false];

    this.draw = function() {
        push();
        this.handleSpotlights();
        this.discoBall();
        this.checkFrequencies();

        //draw stickmen
        this.stickman1(); 
        this.stickman2(); 
        this.stickman3(); 
        this.stickman4(); 
        this.stickman5(); 
        pop();
    };

    this.discoBall = function() {
        //rendering the disco ball with an image and an ellipse with random fill
        noStroke();
        var r = random(0, 255);
        var g = random(0, 255);
        var b = random(0, 255);
        fill(r, g, b);
        ellipse(windowWidth / 2, windowHeight / 4.95, 165, 165);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.diameter, this.diameter); 
    };

    this.checkFrequencies = function() {
        push();
        var spectrum = fourier.analyze();
        var spectrumSize = spectrum.length;

        //setting the jump and spotlights states to false 
        this.jumpStates = [false, false, false, false, false];
        this.spotlightStates = [false, false, false, false, false];

        for (var i = 0; i < spectrumSize; i++) {
            var amplitude = spectrum[i];
            var freq = fourier.getFreq(i); 
            
        //comparing to the frequency ranges for the stickmen to turn the hump and spotlight to true when it matches
            for (var j = 0; j < this.freqRanges.length; j++) {
                if (freq >= this.freqRanges[j].min && freq <= this.freqRanges[j].max) {
                    if (amplitude > 200) { 
                        this.jumpStates[j] = true; 
                        this.spotlightStates[j] = true; 
                    }
                }
            }
        }
        pop();
    };

    this.handleSpotlights = function() {
        //using switch case statements to turn spotlights on & off based on jump states according to the frequency range
        for (var i = 0; i < this.spotlightStates.length; i++) {
            switch (i) {
                case 0:
                    if (this.spotlightStates[i]) this.spotlight1();
                    break;
                case 1:
                    if (this.spotlightStates[i]) this.spotlight2();
                    break;
                case 2:
                    if (this.spotlightStates[i]) this.spotlight3();
                    break;
                case 3:
                    if (this.spotlightStates[i]) this.spotlight4();
                    break;
                case 4:
                    if (this.spotlightStates[i]) this.spotlight5();
                    break;
            }
        }
    };

    this.stickman1 = function() {
        //Sadness
        stroke(32, 97, 201);
        strokeWeight(4);
        fill(32, 97, 201);
        this.drawStickman(width / 6, height - 150, this.jumpStates[0]);
    };

    this.stickman2 = function() {
        //Embarassment 
        stroke(181, 100, 167);
        strokeWeight(4);
        fill(181, 100, 167);
        this.drawStickman(width / 6 + 250, height - 150, this.jumpStates[1]);
    };

    this.stickman3 = function() {
        //Disgust
        stroke(94, 148, 58);
        strokeWeight(4);
        fill(94, 148, 58);
        this.drawStickman(width / 6 + 2 * 250, height - 150, this.jumpStates[2]);
    };

    this.stickman4 = function() {
        //Fear
        stroke(128, 88, 184);
        strokeWeight(4);
        fill(128, 88, 184);
        this.drawStickman(width / 6 + 3 * 250, height - 150, this.jumpStates[3]);
    };

    this.stickman5 = function() {
        //Anxiety
        stroke(171, 74, 26);
        strokeWeight(4);
        fill(171, 74, 26);
        this.drawStickman(width / 6 + 4 * 250, height - 150, this.jumpStates[4]);
    };

    this.drawStickman = function(x, y, isJumping) {
        //drawing the stickmen and if statement for jumping arm movement 

        var jumpHeight = isJumping ? -120 : 0;

        // Head
        ellipse(x, y + jumpHeight, 50, 50);

        // Body
        line(x, y + 25 + jumpHeight, x, y + 100 + jumpHeight);

        // Arms
        if (isJumping) {
            // Hands upwards when jumping
            line(x, y + 40 + jumpHeight, x - 50, y + 10 + jumpHeight);
            line(x, y + 40 + jumpHeight, x + 50, y + 10 + jumpHeight);
        } else {
            // Normal arm position
            line(x, y + 50 + jumpHeight, x - 50, y + 75 + jumpHeight);
            line(x, y + 50 + jumpHeight, x + 50, y + 75 + jumpHeight);
        }

        // Legs
        line(x, y + 100 + jumpHeight, x - 40, y + 145 + jumpHeight);
        line(x, y + 100 + jumpHeight, x + 40, y + 145 + jumpHeight);
    };

    //drawing the spotlights for each character 
    this.spotlight1 = function() {
        stroke(0);
        fill(250, 227, 137);
        beginShape();
        vertex(windowWidth / 2, windowHeight / 4.95);
        vertex(148, 582);
        vertex(148, 964);
        vertex(384, 964);
        vertex(384, 582);
        vertex(windowWidth / 2, windowHeight / 4.95);
        endShape();
    };

    this.spotlight2 = function() {
        stroke(0);
        fill(250, 227, 137);
        beginShape();
        vertex(windowWidth / 2, windowHeight / 4.95);
        vertex(384, 582);
        vertex(384, 964);
        vertex(610, 964);
        vertex(610, 582);
        vertex(windowWidth / 2, windowHeight / 4.95);
        endShape();
    };

    this.spotlight3 = function() {
        stroke(0);
        fill(250, 227, 137);
        beginShape();
        vertex(windowWidth / 2, windowHeight / 4.95);
        vertex(596, 964);
        vertex(897, 964);
        vertex(windowWidth / 2, windowHeight / 4.95);
        endShape();
    };

    this.spotlight4 = function() {
        stroke(0);
        fill(250, 227, 137);
        beginShape();
        vertex(windowWidth / 2, windowHeight / 4.95);
        vertex(886, 582);
        vertex(886, 964);
        vertex(1121, 964);
        vertex(1121, 582);
        vertex(windowWidth / 2, windowHeight / 4.95);
        endShape();
    };

    this.spotlight5 = function() {
        stroke(0);
        fill(250, 227, 137);
        beginShape();
        vertex(windowWidth / 2, windowHeight / 4.95);
        vertex(1121, 582);
        vertex(1121, 964);
        vertex(1370, 964);
        vertex(1370, 582);
        vertex(windowWidth / 2, windowHeight / 4.95);
        endShape();
    };
}
