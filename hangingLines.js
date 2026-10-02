function HangingLines() {
    this.name = "Hanging Lines";

    //setting the number of lines and creating arrays for line lengths and circle positions
    this.numLines = 10;
    this.lineLengths = new Array(this.numLines).fill(0);
    this.circlePositions = new Array(this.numLines).fill(0);

    this.draw = function() {
        //dividing the frequency specturm for each line
        var spectrum = fourier.analyze();
        var frequencyGap = Math.floor(spectrum.length / 2 / this.numLines);

        //mapping the ellipse size on music amplitute 
        var amp = amplitude.getLevel();
        var circleSize = map(amp, 0, 1, 10, 100);  

        //drawing the lines with different spectrum patterns and adding gradient in them
        push();
        for (var i = 0; i < this.numLines; i++) {

            //mapping the spectrum to the line length
            var spectrumValue = spectrum[i * frequencyGap];
            this.lineLengths[i] = map(spectrumValue, 0, 255, 150, height);

            var x = map(i, 0, this.numLines - 1, 50, width - 50);
            for (var y = 0; y < this.lineLengths[i]; y += 5) {
                var spectrumIndex = Math.floor(map(y, 0, this.lineLengths[i], 0, spectrum.length - 1));
                var spectrumValue = spectrum[spectrumIndex];
                var lineLength = map(spectrumValue, 0, 255, 0, 80); 

                //Adding the gradient to the lines according to the y position
                var gradientPosition = map(y, 0, this.lineLengths[i], 0, 1);
                var r = lerp(255, 100, gradientPosition);
                var g = lerp(255, 50, gradientPosition);
                var b = lerp(255, 150, gradientPosition);

                //setting stroke color to gradient
                stroke(r, g, b);

                //defining the starting and ending positions of the line
                line(x - lineLength / 2, y, x + lineLength / 2, y);
            }

            //defining the ellipse positing according to the current y positions of the lines
            fill(169, 109, 242);
            noStroke();
            ellipse(x, this.lineLengths[i] - this.circlePositions[i], circleSize, circleSize);
        }
        pop();
    };
}

