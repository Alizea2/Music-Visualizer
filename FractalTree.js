function FractalTree() {
    // Visualization name
    this.name = "Harmony of Branches";
    this.angle = PI / 4;

    this.draw = function() {
        push();

        // Adding Color to the tree
        var r = random(0, 255);
        var g = random(0, 255);
        var b = random(0, 255);
        stroke(r, g, b);
        strokeWeight(1);
        translate(width / 2, height);

        //analyzing and getting frquency energy to map the depth of the branches
        var spectrum = fourier.analyze();
        var highFreqEnergy = fourier.getEnergy(1000, 2000); 
        var maxDepth = floor(map(highFreqEnergy, 0, 255, 2, 15));

        // Getting and mapping the amplitude value to control branch size and angle
        var value = amplitude.getLevel();
        var baseLength = map(value, 0, 1, 200, 400); 
        this.angle = map(value, 0, 1, PI / 6, PI / 3); 

        // Calling the Recursive Function to create the fractal tree
        this.branches(baseLength, maxDepth);
        pop();
    }


    this.branches = function(len, depth) {
    //https://youtu.be/0jjeOYMjmDU?si=ccUoakx8j6IQ86Fj
        // Draw the current branch
        line(0, 0, 0, -len);
        translate(0, -len);

        // Recursive branching
        if (depth > 0) {
            push();
            rotate(this.angle);
            this.branches(len * 0.69, depth - 1);
            pop();

            push();
            rotate(-this.angle);
            this.branches(len * 0.69, depth - 1);
            pop();
        }
    }
}

