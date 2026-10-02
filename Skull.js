function Skull(){
    
    //vis name
	this.name = "Skull Sonic";
    this.x = 0;
    this.y = 0;
    this.amplitude = amplitude;


    this.draw=function(){
       background(45);

       //calling function with menu and it's conditional statements
       push();
       this.selectionBox();
       pop();
    }

    this.selectionBox = function(){

        //Selection Box Layout
       fill(102, 101, 100);
       rect(this.x+500,this.y+625,440,110);
       fill(45)
       rect(this.x+537,this.y+685,115,40);
       rect(this.x+660,this.y+685,115,40);
       rect(this.x+783,this.y+685,115,40);

       //Selection Box Text
       fill(0);
       textSize(32);
       fill(179, 76, 4);
       stroke(195, 197, 199);
       strokeWeight(4);
       text('Selection Box',620, 655);
       text('A',590, 715);
       text('B',710, 715);
       text('C',830, 715);
       fill(255);
       strokeWeight(1);
       textSize(20);
       text('Select the key on your keyboard',580, 675);

//////////////// Selection Box Functionality /////////////////
       switch (keyCode){
        case 65:
            this.drawOne();
            break;
        case 66:
            this.drawTwo();
            break;
        case 67:
            this.drawThree();
            break;
        default:
       this.drawOne();
       }
    }

    this.drawOne = function(){

        //Rendering across the Screen
        for(var i=0;i< 4;i++){
        for(var j=0;j< 6;j++){
        var currentY = this.y + i * 250;
        var currentX = this.x + j * 240;

        //Mapping the Amplitude Value    
        var level = this.amplitude.getLevel();
        var size = map(level,0,1,0.5,2);

        //Translating and Scaling the Skull according to the Map Values
        push();
        translate(currentX + 110, currentY + 60);
        scale(size);
        translate(-(currentX + 110), -(currentY + 60));


///////////////////////// SKULL DESIGN /////////////////////////
        //BasicSkull
        noStroke();
        fill(235);
      
        beginShape();
        vertex(currentX+66,currentY+34);
        vertex(currentX+73,currentY+27);
        vertex(currentX+144,currentY+97);
        vertex(currentX+138,currentY+105);
        vertex(currentX+66,currentY+34);
        endShape();
        beginShape();
        vertex(currentX+72,currentY+100);
        vertex(currentX+80,currentY+105);
        vertex(currentX+148,currentY+34);
        vertex(currentX+141,currentY+30);
        vertex(currentX+72,currentY+100);
        endShape();
        fill(235);
        ellipse(currentX+66,currentY+35,12,12);
        ellipse(currentX+74,currentY+28,12,12);
        ellipse(currentX+70,currentY+103,12,12);
        ellipse(currentX+77,currentY+109,12,12);
        ellipse(currentX+141,currentY+108,12,12);
        ellipse(currentX+147,currentY+101,12,12);
        ellipse(currentX+144,currentY+27,12,12);
        ellipse(currentX+152,currentY+34,12,12);
        fill(255);
        ellipse(currentX+110,currentY+60,40,40);
        rect(currentX+95,currentY+78,28,22,10);
        stroke(0);
        strokeWeight(2);
        fill(199,195,183);
        beginShape();
        curveVertex(currentX+96,currentY+86);
        curveVertex(currentX+96,currentY+86);
        curveVertex(currentX+96,currentY+79);
        curveVertex(currentX+97,currentY+77);
        curveVertex(currentX+97,currentY+77);
        curveVertex(currentX+99,currentY+77);
        curveVertex(currentX+103,currentY+80);
        curveVertex(currentX+105,currentY+81);
        curveVertex(currentX+106,currentY+81);
        curveVertex(currentX+109,currentY+81);
        curveVertex(currentX+111,currentY+81);
        curveVertex(currentX+113,currentY+81);
        curveVertex(currentX+115,currentY+81);
        curveVertex(currentX+117,currentY+80);
        curveVertex(currentX+118,currentY+79);
        curveVertex(currentX+120,currentY+78);
        curveVertex(currentX+121,currentY+77);
        curveVertex(currentX+122,currentY+77);
        curveVertex(currentX+122,currentY+79);
        curveVertex(currentX+122,currentY+82);
        curveVertex(currentX+122,currentY+84);
        curveVertex(currentX+122,currentY+85);
        curveVertex(currentX+122,currentY+87);
        curveVertex(currentX+122,currentY+86);
        curveVertex(currentX+121,currentY+87);
        curveVertex(currentX+120,currentY+88);
        curveVertex(currentX+118,currentY+89);
        curveVertex(currentX+117,currentY+90);
        curveVertex(currentX+115,currentY+91);
        curveVertex(currentX+113,currentY+91);
        curveVertex(currentX+111,currentY+91);
        curveVertex(currentX+109,currentY+91);
        curveVertex(currentX+106,currentY+91);
        curveVertex(currentX+105,currentY+91);
        curveVertex(currentX+103,currentY+90);
        curveVertex(currentX+99,currentY+87);
        curveVertex(currentX+97,currentY+86);
        curveVertex(currentX+95,currentY+85);
        endShape();
        fill(0);
        rect(currentX+100,currentY+79,1,8);
        rect(currentX+106,currentY+81,1,8);
        rect(currentX+112,currentY+81,1,8);
        rect(currentX+118,currentY+80,1,8);
        ellipse(currentX+103,currentY+68,10,10);
        ellipse(currentX+117,currentY+68,10,10);
        ellipse(currentX+110,currentY+76,2,2);

        //Design
        noStroke();
        fill(235,200,106);
        ellipse(currentX+110,currentY+50,38,22);
        stroke(1);
        fill(235,200,106);
        rect(currentX+75,currentY+55,70,6);
        fill(255,0,0);
        rect(currentX+91,currentY+50,38,5);
        pop();
        }
        }
    }

    this.drawTwo = function(){

        //Rendering across the Screen
        for(var i=0;i< 4;i++){
        for(var j=0;j< 6;j++){
        var currentY = this.y + i * 250;
        var currentX = this.x + j * 240;

        //Mapping the Amplitude Value    
        var level = this.amplitude.getLevel();
        var size = map(level,0,1,0.5,2)

        //Translating and Scaling the Skull according to the Map Values
        push();
        translate(currentX + 110, currentY + 60);
        scale(size);
        translate(-(currentX + 110), -(currentY + 60));



///////////////////////// SKULL DESIGN /////////////////////////
        //Design
        noStroke();
        fill(140,140,140);
        rect(currentX+107,currentY+27,6,100);
        triangle(currentX+107,currentY+127,currentX+113,currentY+127,currentX+110,currentY+134);
        fill(168, 160, 153)
        ellipse(currentX+110,currentY+13,4,25);
        rect(currentX+105,currentY+5,10,3);
        fill(255);
        rect(currentX+110,currentY+27,1,102);
        fill(148,123,90);
        ellipse(currentX+110,currentY+27,30,5);
        ellipse(currentX+110,currentY+23,10,10);
        fill(0,0,255);
        ellipse(currentX+110,currentY+23,6,6);

        //BasicSkull
        fill(235)
        beginShape();
        vertex(currentX+66,currentY+34);
        vertex(currentX+73,currentY+27);
        vertex(currentX+144,currentY+97);
        vertex(currentX+138,currentY+105);
        vertex(currentX+66,currentY+34);
        endShape();
        beginShape();
        vertex(currentX+72,currentY+100);
        vertex(currentX+80,currentY+105);
        vertex(currentX+148,currentY+34);
        vertex(currentX+141,currentY+30);
        vertex(currentX+72,currentY+100);
        endShape();
        endShape();
        fill(235);
        ellipse(currentX+66,currentY+35,12,12);
        ellipse(currentX+74,currentY+28,12,12);
        ellipse(currentX+70,currentY+103,12,12);
        ellipse(currentX+77,currentY+109,12,12);
        ellipse(currentX+141,currentY+108,12,12);
        ellipse(currentX+147,currentY+101,12,12);
        ellipse(currentX+144,currentY+27,12,12);
        ellipse(currentX+152,currentY+34,12,12);
        fill(255);
        ellipse(currentX+110,currentY+60,40,40);
        rect(currentX+95,currentY+78,28,22,10);
        stroke(0);
        strokeWeight(2);
        fill(199,195,183);
        beginShape();
        curveVertex(currentX+96,currentY+86);
        curveVertex(currentX+96,currentY+86);
        curveVertex(currentX+96,currentY+79);
        curveVertex(currentX+97,currentY+77);
        curveVertex(currentX+97,currentY+77);
        curveVertex(currentX+99,currentY+77);
        curveVertex(currentX+103,currentY+80);
        curveVertex(currentX+105,currentY+81);
        curveVertex(currentX+106,currentY+81);
        curveVertex(currentX+109,currentY+81);
        curveVertex(currentX+111,currentY+81);
        curveVertex(currentX+113,currentY+81);
        curveVertex(currentX+115,currentY+81);
        curveVertex(currentX+117,currentY+80);
        curveVertex(currentX+118,currentY+79);
        curveVertex(currentX+120,currentY+78);
        curveVertex(currentX+121,currentY+77);
        curveVertex(currentX+122,currentY+77);
        curveVertex(currentX+122,currentY+79);
        curveVertex(currentX+122,currentY+82);
        curveVertex(currentX+122,currentY+84);
        curveVertex(currentX+122,currentY+85);
        curveVertex(currentX+122,currentY+87);
        curveVertex(currentX+122,currentY+86);
        curveVertex(currentX+121,currentY+87);
        curveVertex(currentX+120,currentY+88);
        curveVertex(currentX+118,currentY+89);
        curveVertex(currentX+117,currentY+90);
        curveVertex(currentX+115,currentY+91);
        curveVertex(currentX+113,currentY+91);
        curveVertex(currentX+111,currentY+91);
        curveVertex(currentX+109,currentY+91);
        curveVertex(currentX+106,currentY+91);
        curveVertex(currentX+105,currentY+91);
        curveVertex(currentX+103,currentY+90);
        curveVertex(currentX+99,currentY+87);
        curveVertex(currentX+97,currentY+86);
        curveVertex(currentX+95,currentY+85);
        endShape();
        fill(0);
        rect(currentX+100,currentY+79,1,8);
        rect(currentX+106,currentY+81,1,8);
        rect(currentX+112,currentY+81,1,8);
        rect(currentX+118,currentY+80,1,8);
        ellipse(currentX+103,currentY+64,10,10);
        ellipse(currentX+117,currentY+64,10,10);
        ellipse(currentX+110,currentY+74,2,2);

        //Design
        rect(currentX+91,currentY+54,38,6);
        ellipse(currentX+110,currentY+51,38,20);
        ellipse(currentX+132,currentY+56,5,5);
        triangle(currentX+132,currentY+56,currentX+142,currentY+50,currentX+150,currentY+54);
        triangle(currentX+132,currentY+56,currentX+133,currentY+68,currentX+140,currentY+73);
        pop();
        }
        }
    }

    this.drawThree = function(){

        //Rendering across the Screen
        for(var i=0;i< 4;i++){
        for(var j=0;j< 6;j++){
        var currentY = this.y + i * 250;
        var currentX = this.x + j * 240;
            
        //Mapping the Amplitude Value   
        var level = this.amplitude.getLevel();
        var size = map(level,0,1,0.5,2)
 
        //Translating and Scaling the Skull according to the Map Values
        push();
        translate(currentX + 110, currentY + 60);
        scale(size);
        translate(-(currentX + 110), -(currentY + 60));



///////////////////////// SKULL DESIGN /////////////////////////
        //Design
        noStroke();
        fill(171,100,209);
        beginShape();
        vertex(currentX+74,currentY+17);
        vertex(currentX+60,currentY+26);
        vertex(currentX+55,currentY+18);
        vertex(currentX+74,currentY+6);
        vertex(currentX+79,currentY+12);
        vertex(currentX+153,currentY+110);
        vertex(currentX+148,currentY+115);
        vertex(currentX+74,currentY+17);
        endShape();
        triangle(currentX+55,currentY+18,currentX+60,currentY+26,currentX+58,currentY+34);

        //Exterior of Skull
        stroke(2);
        fill(0);
        ellipse(currentX+110,currentY+64,70,70);
        ellipse(currentX+80,currentY+42,10,10);
        ellipse(currentX+88,currentY+34,10,10);
        ellipse(currentX+98,currentY+28,10,10);
        ellipse(currentX+109,currentY+26,10,10);
        ellipse(currentX+120,currentY+27,10,10);
        ellipse(currentX+130,currentY+31,10,10);
        ellipse(currentX+137,currentY+39,10,10);
        ellipse(currentX+143,currentY+48,10,10);
        ellipse(currentX+146,currentY+58,10,10);
        ellipse(currentX+147,currentY+68,10,10);
        ellipse(currentX+145,currentY+78,10,10);
        ellipse(currentX+141,currentY+86,10,10);
        ellipse(currentX+134,currentY+93,10,10);
        ellipse(currentX+126,currentY+98,10,10);
        ellipse(currentX+117,currentY+101,10,10);
        ellipse(currentX+106,currentY+102,10,10);
        ellipse(currentX+96,currentY+99,10,10);
        ellipse(currentX+87,currentY+93,10,10);
        ellipse(currentX+80,currentY+86,10,10);
        ellipse(currentX+75,currentY+77,10,10);
        ellipse(currentX+73,currentY+68,10,10);
        ellipse(currentX+73,currentY+58,10,10);
        ellipse(currentX+75,currentY+49,10,10);

        //Hat
        beginShape();
        vertex(currentX+128,currentY+18);
        vertex(currentX+152,currentY+48);
        vertex(currentX+154,currentY+46);
        vertex(currentX+148,currentY+37);
        vertex(currentX+165,currentY+32);
        vertex(currentX+150,currentY+13);
        vertex(currentX+139,currentY+26);
        vertex(currentX+130,currentY+16);
        vertex(currentX+128,currentY+18);
        endShape();

        //Basic Skull
        noStroke();
        fill(255);
        ellipse(currentX+110,currentY+60,40,35);
        fill(0);
        ellipse(currentX+103,currentY+58,12,12);
        ellipse(currentX+117,currentY+58,12,12);
        ellipse(currentX+110,currentY+67,4,4);
        fill(255);
        ellipse(currentX+110,currentY+78,6,10);
        ellipse(currentX+104,currentY+78,6,10);
        ellipse(currentX+116,currentY+78,6,10);
        pop();
        }
        }
    }
}