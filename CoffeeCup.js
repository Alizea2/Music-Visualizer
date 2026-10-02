function CoffeeCup(){
    
    //vis name
	this.name = "Bouncing Coffee Cup";
    this.x =windowWidth/4;
    this.y =windowHeight/4.7;
    this.bg = [
    loadImage("assets/IMG_7768.JPG"),
    loadImage("assets/IMG_7769.JPG"),
    loadImage("assets/IMG_7770.JPG")
    ]
    //background image variables
    this.currentImageIndex = 0;
    this.imageChangeInterval = 120;


this.draw = function(){

    //calling function
    push();
    this.backgroundImg();
    this.drawCup();
    this.drawSmoke();
    pop();
}


this.backgroundImg = function(){
    //background image changing
    push();
    if (frameCount % this.imageChangeInterval == 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.bg.length;
    }

    var img = this.bg[this.currentImageIndex];
    image(img, 0, 0, windowWidth, windowHeight);
    pop();
}


this.drawCup = function(){
    push();

    //bouncing coffee cup
    var Amp = amplitude.getLevel();
    var jump = map(Amp, 0, 1, 0, 100);
    
    noStroke();
    fill(215);
    ellipse(this.x + 410, this.y + 427 - jump, 450, 40);
    fill(84, 56, 8);
    ellipse(this.x + 410, this.y + 432 - jump, 400, 35);
    fill(215);
    rect(this.x + 333, this.y + 680 - jump, 160, 25);
    fill(255);
    arc(this.x + 410, this.y + 654 - jump, 550, 70, 0, PI);
    arc(this.x + 410, this.y + 429 - jump, 450, 480, 0, PI);
    noFill();
    stroke(255);
    strokeWeight(35);
    ellipse(this.x + 212, this.y + 545 - jump, 140);

    //Scaling the text according to the Map Values
    var textSizeVal = map(Amp, 0, 1, 36, 72);
    fill(84, 56, 8);
    textSize(textSizeVal);
    stroke(135, 87, 4);
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    text('COFFEE BEAN', this.x + 410, this.y + 540 - jump);
    pop();
    }


    this.drawSmoke = function() {
        var Amp = amplitude.getLevel();
        var waveHeight = map(Amp, 0, 1, 0, 100);
    
        noFill();
        stroke(255);
        strokeWeight(4);
        
        push();
        for (var i = 0; i < 5; i++) {
            var xMove = i * 50;
            beginShape();
        for (var y = 0; y < 400; y++) {
            var x = this.x + 500 - xMove + sin(TWO_PI * (y / 400.0) + frameCount * 0.05) * waveHeight;
            vertex(x,this.y - 20 + y);
        }
            endShape();
        }
        pop();
    }
}
