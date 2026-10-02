function introPage() {
    //vis name
    this.name = "Introduction";
    this.x = 0;
    this.y = 0;

    // Draw function for the introduction page
    this.draw = function() {
        background(0);  
        
        push();
        // Text Properties
        textAlign(CENTER, CENTER);
        fill(255);  
        textSize(100);
        
        // Heading of the page
        text("Music Visualizer", width / 2, height / 4);
        
        //Arrow key heading and symbols with labellings
        textSize(50);
        text("Arrow keys", width / 2, height - 350);
        textSize(150);
        text("⯅", width / 2 - 100, height - 200);  
        text("⯆", width / 2 + 100, height - 200);  
        textSize(50);
        text("←", width / 2 - 100, height - 200);  
        text("→", width / 2 + 100, height - 200);  
        text("Previous", width / 2 - 270, height - 200);  
        text("Next", width / 2 + 230, height - 200);  

        pop();
    };
}
