function Ballerina(){
    
    //vis name
	this.name = "Musical Ballerina";
    this.x=720;
    this.y=525;
    this.numPoints = 5;
    this.angleIncrement = (2 * Math.PI) / this.numPoints;
    this.radius = 50; 
    this.currentPoint = 0;
    this.centerX = windowWidth / 2;
    this.centerY = windowHeight / 2;


    this.draw = function(){
		background(0);

////////////////// CIRCULLAR MUSIC REPRESENTATION ///////////////////////

        this.musicCircle();

////////////////// INVISIBLE CIRCULLAR PATH ///////////////////////
        stroke(0);
        noFill();
        ellipse(this.centerX, this.centerY - 100, this.radius * 2);
                
////////////////// RENDERING & CHANGINGING THE BALLERINA PROFILES /////////////////////// 

        push();
        this.dance();
        pop();
    }

    this.musicCircle = function(){
        //Refernce: https://youtu.be/uk96O7N1Yo0?si=LvP35j1DmVjBNkYy
        push();
        stroke(240, 179, 255)
        strokeWeight(1);
        noFill()

        translate (width/2,height/2);
        var wave = fourier.waveform();
        beginShape();
        for(var i =0; i<=180; i++){
        var point=floor( map(i,0,180,0,wave.length - 1));
        var s = map(wave[point],-1,1,250,350);
        var a = s * sin(i);
        var b = s * cos(i);
        vertex(a,b);
        }
        endShape();
        pop();
    }

    this.dance = function() {
        // Calculating current position along the circular path
        var angle = this.currentPoint * this.angleIncrement;
        var x = this.centerX + this.radius * cos(angle);
        var y = this.centerY - 50 + this.radius * sin(angle);
    
        // Defining a key based on angle
        var key = Math.floor(this.currentPoint % 5); 
    
        // Using switch statement with the key to change ballerina profiles 
        switch (key) {
            case 0:
                this.drawOne(x, y);
                break;
            case 1:
                this.drawTwo(x, y);
                break;
            case 2:
                this.drawThree(x, y);
                break;
            case 3:
                this.drawFour(x, y);
                break;
            case 4:
                this.drawFive(x, y);
                break;
            default:
                this.drawOne(x, y);
                break;
        }
    
        // speed and moving to next point
        this.currentPoint += 0.04; 
        if (this.currentPoint >= this.numPoints) {
            this.currentPoint = 0;
        }
    }

    this.drawOne = function(x,y){
        //1st Profile
      

        noStroke();
        //face
        fill(230, 202, 170);
        ellipse(x, y + 15, 60, 60);
        rect(x - 4, y + 42, 10, 10);
        //hair
        fill(82, 55, 25);
        ellipse(x, y - 3, 56, 22);
        ellipse(x, y - 20, 30, 30);
        ellipse(x - 25, y + 3, 15, 15);
        ellipse(x - 12, y + 3, 15, 15);
        ellipse(x, y + 3, 15, 15);
        ellipse(x + 12, y + 3, 15, 15);
        ellipse(x + 25, y + 3, 15, 15);
        //bow
        fill(133, 44, 87);
        ellipse(x, y - 13, 5, 5);
        triangle(x, y - 13, x - 10, y - 10, x - 10, y - 17);
        triangle(x, y - 13, x + 10, y - 10, x + 10, y - 17);
        //eyes
        fill(255);
        ellipse(x - 10, y + 20, 8, 12);
        ellipse(x + 10, y + 20, 8, 12);
        fill(73, 119, 145);
        ellipse(x - 10, y + 22, 7, 7);
        ellipse(x + 10, y + 22, 7, 7);
        fill(0);
        ellipse(x - 10, y + 22, 4, 4);
        ellipse(x + 10, y + 22, 4, 4);
        //nose
        fill(82, 55, 25);
        ellipse(x, y + 27, 5, 5);
        fill(230, 202, 170);
        ellipse(x, y + 28, 5, 5);
        //lips
        fill(227, 93, 158);
        ellipse(x, y + 35, 7, 4);
        triangle(x - 1, y + 32, x - 4, y + 35, x, y + 34);
        triangle(x + 1, y + 32, x + 4, y + 35, x, y + 34);
        //legs
        fill(230, 202, 170);
        rect(x - 9, y + 95, 8, 85);
        rect(x + 1, y + 95, 8, 85);
        fill(133, 44, 87);
        ellipse(x - 11, y + 180, 20, 8);
        ellipse(x + 11, y + 180, 20, 8);
        triangle(x, y + 167, x - 9, y + 161, x - 9, y + 158);
        triangle(x, y + 167, x + 9, y + 161, x + 9, y + 158);
        triangle(x - 10, y + 172, x - 1, y + 168, x - 1, y + 165);
        triangle(x + 10, y + 172, x, y + 168, x, y + 165);
        triangle(x, y + 180, x - 9, y + 174, x - 9, y + 171);
        triangle(x, y + 180, x + 9, y + 174, x + 9, y + 171);
        //dress
        fill(245, 135, 188);
        rect(x - 14, y + 52, 30, 30);
        triangle(x + 1, y + 78, x - 39, y + 91, x + 41, y + 91);
        ellipse(x + 1, y + 115, 20, 20);
        ellipse(x - 18, y + 110, 20, 20);
        ellipse(x + 19, y + 110, 20, 20);
        ellipse(x - 35, y + 100, 20, 20);
        ellipse(x + 37, y + 100, 20, 20);
        ellipse(x + 1, y + 98, 70, 30);
        fill(230, 202, 170);
        ellipse(x + 1, y + 53, 10, 10);
        fill(133, 44, 87);
        rect(x - 14, y + 77, 30, 5);
        //hands
        fill(230, 202, 170);
        beginShape();
        vertex(x - 14, y + 52);
        vertex(x - 30, y + 66);
        vertex(x - 17, y + 83);
        vertex(x - 14, y + 82);
        vertex(x - 22, y + 66);
        vertex(x - 14, y + 58);
        endShape();
        beginShape();
        vertex(x + 16, y + 52);
        vertex(x + 31, y + 66);
        vertex(x + 19, y + 83);
        vertex(x + 16, y + 82);
        vertex(x + 24, y + 66);
        vertex(x + 16, y + 58);
        endShape();
        ellipse(x - 16, y + 82, 8, 8);
        ellipse(x + 17, y + 82, 8, 8);

    }

    this.drawTwo = function(x,y){
        //2nd Profile
       
        noStroke();
        fill(230, 202, 170);
        ellipse(x, y + 15, 60, 60);
        rect(x - 4, y + 42, 10, 10);
        //hair
        fill(82, 55, 25);
        ellipse(x, y - 3, 56, 22);
        ellipse(x, y - 20, 30, 30);
        ellipse(x - 25, y + 3, 15, 15);
        ellipse(x - 12, y + 3, 15, 15);
        ellipse(x, y + 3, 15, 15);
        ellipse(x + 12, y + 3, 15, 15);
        ellipse(x + 25, y + 3, 15, 15);
        //bow
        fill(133, 44, 87);
        ellipse(x, y - 13, 5, 5);
        triangle(x, y - 13, x - 10, y - 10, x - 10, y - 17);
        triangle(x, y - 13, x + 10, y - 10, x + 10, y - 17);
        //eyes
        fill(255);
        ellipse(x - 10, y + 20, 8, 12);
        ellipse(x + 10, y + 20, 8, 12);
        fill(73, 119, 145);
        ellipse(x - 10, y + 22, 7, 7);
        ellipse(x + 10, y + 22, 7, 7);
        fill(0);
        ellipse(x - 10, y + 22, 4, 4);
        ellipse(x + 10, y + 22, 4, 4);
        //nose
        fill(82, 55, 25);
        ellipse(x, y + 27, 5, 5);
        fill(230, 202, 170);
        ellipse(x, y + 28, 5, 5);
        //lips
        fill(227, 93, 158);
        ellipse(x, y + 35, 7, 4);
        triangle(x - 1, y + 32, x - 4, y + 35, x, y + 34);
        triangle(x + 1, y + 32, x + 4, y + 35, x, y + 34);
        //legs
        fill(230, 202, 170);
        rect(x - 14, y + 95, 8, 85);
        rect(x + 6, y + 95, 8, 85);
        fill(133, 44, 87);
        ellipse(x - 16, y + 180, 20, 8);
        ellipse(x + 16, y + 180, 20, 8);
        triangle(x - 5, y + 167, x - 14, y + 161, x - 14, y + 158);
        triangle(x + 5, y + 167, x + 14, y + 161, x + 14, y + 158);
        triangle(x - 15, y + 172, x - 6, y + 168, x - 6, y + 165);
        triangle(x + 15, y + 172, x + 5, y + 168, x + 5, y + 165);
        triangle(x - 5, y + 180, x - 14, y + 174, x - 14, y + 171);
        triangle(x + 5, y + 180, x + 14, y + 174, x + 14, y + 171);
        //hands
        fill(230, 202, 170);
        rect(x - 48, y + 52, 100, 6);
        ellipse(x - 48, y + 55, 8, 8);
        ellipse(x + 52, y + 55, 8, 8);
        //dress
        fill(245, 135, 188);
        rect(x - 14, y + 52, 30, 30);
        triangle(x + 1, y + 78, x - 39, y + 91, x + 41, y + 91);
        ellipse(x + 1, y + 115, 20, 20);
        ellipse(x - 18, y + 110, 20, 20);
        ellipse(x + 19, y + 110, 20, 20);
        ellipse(x - 35, y + 100, 20, 20);
        ellipse(x + 37, y + 100, 20, 20);
        ellipse(x + 1, y + 98, 70, 30);
        fill(230, 202, 170);
        ellipse(x + 1, y + 53, 10, 10);
        fill(133, 44, 87);
        rect(x - 14, y + 77, 30, 5);

    }

    this.drawThree = function(x,y){
        //3rd Profile       
        
        noStroke();
        fill(230, 202, 170);
        ellipse(x, y + 15, 60, 60);
        rect(x - 4, y + 42, 10, 10);
        //hair
        fill(82, 55, 25);
        ellipse(x, y - 3, 56, 22);
        ellipse(x, y - 20, 30, 30);
        ellipse(x - 25, y + 3, 15, 15);
        ellipse(x - 12, y + 3, 15, 15);
        ellipse(x, y + 3, 15, 15);
        ellipse(x + 12, y + 3, 15, 15);
        ellipse(x + 25, y + 3, 15, 15);
        //bow
        fill(133, 44, 87);
        ellipse(x, y - 13, 5, 5);
        triangle(x, y - 13, x - 10, y - 10, x - 10, y - 17);
        triangle(x, y - 13, x + 10, y - 10, x + 10, y - 17);
        //eyes
        fill(255);
        ellipse(x - 10, y + 20, 8, 12);
        ellipse(x + 10, y + 20, 8, 12);
        fill(73, 119, 145);
        ellipse(x - 10, y + 22, 7, 7);
        ellipse(x + 10, y + 22, 7, 7);
        fill(0);
        ellipse(x - 10, y + 22, 4, 4);
        ellipse(x + 10, y + 22, 4, 4);
        //nose
        fill(82, 55, 25);
        ellipse(x, y + 27, 5, 5);
        fill(230, 202, 170);
        ellipse(x, y + 28, 5, 5);
        //lips
        fill(227, 93, 158);
        ellipse(x, y + 35, 7, 4);
        triangle(x - 1, y + 32, x - 4, y + 35, x, y + 34);
        triangle(x + 1, y + 32, x + 4, y + 35, x, y + 34);
        //legs
        fill(230, 202, 170);
        rect(x - 9, y + 95, 8, 85);
        rect(x + 1, y + 95, 8, 85);
        fill(133, 44, 87);
        ellipse(x - 11, y + 180, 20, 8);
        ellipse(x + 11, y + 180, 20, 8);
        triangle(x, y + 167, x - 9, y + 161, x - 9, y + 158);
        triangle(x, y + 167, x + 9, y + 161, x + 9, y + 158);
        triangle(x - 10, y + 172, x - 1, y + 168, x - 1, y + 165);
        triangle(x + 10, y + 172, x, y + 168, x, y + 165);
        triangle(x, y + 180, x - 9, y + 174, x - 9, y + 171);
        triangle(x, y + 180, x + 9, y + 174, x + 9, y + 171);
        //dress
        fill(245, 135, 188);
        rect(x - 14, y + 52, 30, 30);
        triangle(x + 1, y + 78, x - 39, y + 91, x + 41, y + 91);
        ellipse(x + 1, y + 115, 20, 20);
        ellipse(x - 18, y + 110, 20, 20);
        ellipse(x + 19, y + 110, 20, 20);
        ellipse(x - 35, y + 100, 20, 20);
        ellipse(x + 37, y + 100, 20, 20);
        ellipse(x + 1, y + 98, 70, 30);
        fill(230, 202, 170);
        ellipse(x + 1, y + 53, 10, 10);
        fill(133, 44, 87);
        rect(x - 14, y + 77, 30, 5);
        //hands
        fill(230, 202, 170);
        beginShape();
        vertex(x - 14, y + 52);
        vertex(x - 30, y + 41); 
        vertex(x - 31, y + 22); 
        vertex(x - 35, y + 22); 
        vertex(x - 37, y + 41); 
        vertex(x - 14, y + 58);
        endShape();
        rect(x + 16, y + 52, 32, 6);
        ellipse(x - 33, y + 22, 8, 8);
        ellipse(x + 48, y + 55, 8, 8);
        
    }


    this.drawFour = function(x,y){
        //4th Profile
        

        noStroke();
        fill(230, 202, 170);
        ellipse(x, y + 15, 60, 60);
        rect(x - 4, y + 42, 10, 10);
        //hair
        fill(82, 55, 25);
        ellipse(x, y - 3, 56, 22);
        ellipse(x, y - 20, 30, 30);
        ellipse(x - 25, y + 3, 15, 15);
        ellipse(x - 12, y + 3, 15, 15);
        ellipse(x, y + 3, 15, 15);
        ellipse(x + 12, y + 3, 15, 15);
        ellipse(x + 25, y + 3, 15, 15);
        //bow
        fill(133, 44, 87);
        ellipse(x, y - 13, 5, 5);
        triangle(x, y - 13, x - 10, y - 10, x - 10, y - 17);
        triangle(x, y - 13, x + 10, y - 10, x + 10, y - 17);
        //eyes
        fill(255);
        ellipse(x - 10, y + 20, 8, 12);
        ellipse(x + 10, y + 20, 8, 12);
        fill(73, 119, 145);
        ellipse(x - 10, y + 22, 7, 7);
        ellipse(x + 10, y + 22, 7, 7);
        fill(0);
        ellipse(x - 10, y + 22, 4, 4);
        ellipse(x + 10, y + 22, 4, 4);
        //nose
        fill(82, 55, 25);
        ellipse(x, y + 27, 5, 5);
        fill(230, 202, 170);
        ellipse(x, y + 28, 5, 5);
        //lips
        fill(227, 93, 158);
        ellipse(x, y + 35, 7, 4);
        triangle(x - 1, y + 32, x - 4, y + 35, x, y + 34);
        triangle(x + 1, y + 32, x + 4, y + 35, x, y + 34);
        //legs
        fill(230, 202, 170);
        rect(x - 9, y + 95, 8, 85);
        rect(x + 1, y + 95, 8, 85);
        fill(133, 44, 87);
        ellipse(x - 11, y + 180, 20, 8);
        ellipse(x + 11, y + 180, 20, 8);
        triangle(x, y + 167, x - 9, y + 161, x - 9, y + 158);
        triangle(x, y + 167, x + 9, y + 161, x + 9, y + 158);
        triangle(x - 10, y + 172, x - 1, y + 168, x - 1, y + 165);
        triangle(x + 10, y + 172, x, y + 168, x, y + 165);
        triangle(x, y + 180, x - 9, y + 174, x - 9, y + 171);
        triangle(x, y + 180, x + 9, y + 174, x + 9, y + 171);
        //dress
        fill(245, 135, 188);
        rect(x - 14, y + 52, 30, 30);
        triangle(x + 1, y + 78, x - 39, y + 91, x + 41, y + 91);
        ellipse(x + 1, y + 115, 20, 20);
        ellipse(x - 18, y + 110, 20, 20);
        ellipse(x + 19, y + 110, 20, 20);
        ellipse(x - 35, y + 100, 20, 20);
        ellipse(x + 37, y + 100, 20, 20);
        ellipse(x + 1, y + 98, 70, 30);
        fill(230, 202, 170);
        ellipse(x + 1, y + 53, 10, 10);
        fill(133, 44, 87);
        rect(x - 14, y + 77, 30, 5);
        //hands
        fill(230, 202, 170);
        beginShape();
        vertex(x + 16, y + 52);  
        vertex(x + 30, y + 41);   
        vertex(x + 30, y + 22);   
        vertex(x + 34, y + 22);   
        vertex(x + 36, y + 41);   
        vertex(x + 16, y + 58); 
        endShape();
        rect(x - 46, y + 52, 32, 6);
        ellipse(x + 32, y + 22, 8, 8);
        ellipse(x - 49, y + 55, 8, 8);
                
    }


    this.drawFive = function(x,y){
        //5th Profile
        
        noStroke();
        fill(230, 202, 170);
        ellipse(x, y + 15, 60, 60);
        rect(x - 4, y + 42, 10, 10);
        //hair
        fill(82, 55, 25);
        ellipse(x, y - 3, 56, 22);
        ellipse(x, y - 20, 30, 30);
        ellipse(x - 25, y + 3, 15, 15);
        ellipse(x - 12, y + 3, 15, 15);
        ellipse(x, y + 3, 15, 15);
        ellipse(x + 12, y + 3, 15, 15);
        ellipse(x + 25, y + 3, 15, 15);
        //bow
        fill(133, 44, 87);
        ellipse(x, y - 13, 5, 5);
        triangle(x, y - 13, x - 10, y - 10, x - 10, y - 17);
        triangle(x, y - 13, x + 10, y - 10, x + 10, y - 17);
        //eyes
        fill(255);
        ellipse(x - 10, y + 20, 8, 12);
        ellipse(x + 10, y + 20, 8, 12);
        fill(73, 119, 145);
        ellipse(x - 10, y + 22, 7, 7);
        ellipse(x + 10, y + 22, 7, 7);
        fill(0);
        ellipse(x - 10, y + 22, 4, 4);
        ellipse(x + 10, y + 22, 4, 4);
        //nose
        fill(82, 55, 25);
        ellipse(x, y + 27, 5, 5);
        fill(230, 202, 170);
        ellipse(x, y + 28, 5, 5);
        //lips
        fill(227, 93, 158);
        ellipse(x, y + 35, 7, 4);
        triangle(x - 1, y + 32, x - 4, y + 35, x, y + 34);
        triangle(x + 1, y + 32, x + 4, y + 35, x, y + 34);
        //legs
        fill(230, 202, 170);
        rect(x - 14, y + 95, 8, 85);
        rect(x + 6, y + 95, 8, 85);
        fill(133, 44, 87);
        ellipse(x - 16, y + 180, 20, 8);
        ellipse(x + 16, y + 180, 20, 8);
        triangle(x - 5, y + 167, x - 14, y + 161, x - 14, y + 158);
        triangle(x + 5, y + 167, x + 14, y + 161, x + 14, y + 158);
        triangle(x - 15, y + 172, x - 6, y + 168, x - 6, y + 165);
        triangle(x + 15, y + 172, x + 5, y + 168, x + 5, y + 165);
        triangle(x - 5, y + 180, x - 14, y + 174, x - 14, y + 171);
        triangle(x + 5, y + 180, x + 14, y + 174, x + 14, y + 171);
        //dress
        fill(245, 135, 188);
        rect(x - 14, y + 52, 30, 30);
        triangle(x + 1, y + 78, x - 39, y + 91, x + 41, y + 91);
        ellipse(x + 1, y + 115, 20, 20);
        ellipse(x - 18, y + 110, 20, 20);
        ellipse(x + 19, y + 110, 20, 20);
        ellipse(x - 35, y + 100, 20, 20);
        ellipse(x + 37, y + 100, 20, 20);
        ellipse(x + 1, y + 98, 70, 30);
        fill(230, 202, 170);
        ellipse(x + 1, y + 53, 10, 10);
        fill(133, 44, 87);
        rect(x - 14, y + 77, 30, 5);
        //hands
        fill(230, 202, 170);
        beginShape();
        vertex(x + 16, y + 52);  
        vertex(x + 30, y + 41);   
        vertex(x + 30, y + 22);   
        vertex(x + 34, y + 22);   
        vertex(x + 36, y + 41);   
        vertex(x + 16, y + 58); 
        endShape();
        beginShape();
        vertex(x - 14, y + 52);
        vertex(x - 30, y + 41); 
        vertex(x - 31, y + 22); 
        vertex(x - 35, y + 22); 
        vertex(x - 37, y + 41); 
        vertex(x - 14, y + 58);
        endShape();
        ellipse(x + 32, y + 22, 8, 8);
        ellipse(x - 33, y + 22, 8, 8);

    }
}