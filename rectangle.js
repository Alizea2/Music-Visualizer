function Rectangle() {
    //vis name
    this.name = "Rectangle Illusion";
    //creating array and setting properties for rectangles
    this.rectangles = [];
    this.timer = 0; 
    this.baseSize = 50; 
    this.sizeIncrement = 20; 
    this.minDelay = 5; 
    this.maxDelay = 10; 

    this.draw = function() {
        //calling the animation function of rectangle mapped on music
        this.rectdraw();
    };

    this.rectdraw = function(){

        //mapping the size and opacity of rectangles on music amplitude
        var level = amplitude.getLevel();
        var size = map(level, 0, 1, this.baseSize, this.baseSize + this.sizeIncrement);
        var alpha = map(level, 0, 1, 50, 255);

        //determining when to render new rectangle according to amplitude level and then increasing the timer
        var timerDelay = map(level, 0, 1, this.maxDelay, this.minDelay);
        this.timer++;

        push();
        //adding a new rectangle each time the it reaches timerDelay
        if (this.timer >= timerDelay) {
            //checking weather to render a horizontal rectangle or not according to music amplitide
            var isHorizontal = level > 0.3;

            //setting properties for the rectangle object
            var newRect = {
                x: width / 2,
                y: height / 2,
                w: isHorizontal ? size * 4 : size,
                h: isHorizontal ? size : size * 4,
                alpha: alpha
            };

            //adding rectangle to the array and resetting the timer
            this.rectangles.push(newRect);
            this.timer = 0; 
        }

        //iterating throught the rectangle array to render rectangles and getting the rectObj
        for (var i = this.rectangles.length - 1; i >= 0; i--) {
            var rectObj = this.rectangles[i];

            //setting the stoke and positing of the rect to draw
            stroke(255, rectObj.alpha);
            noFill();
            rectMode(CENTER);
            rect(rectObj.x, rectObj.y, rectObj.w, rectObj.h);

            //increasing the dimensions and alpha value of the rectangles
            rectObj.alpha += 5;
            rectObj.w += 2;
            rectObj.h += 2; 

            //removing the rectangle if it has become too large
            if (rectObj.w >= width || rectObj.h >= height) {
                this.rectangles.splice(i, 1);
            }
        }
        pop();
    }
}


