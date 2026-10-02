# Music Visualizer

An interactive music visualizer built with **p5.js** and **p5.sound**. It analyses a song in real time with a **Fast Fourier Transform (FFT)** and amplitude readings, and drives eight custom visualisations from frequency and volume, from dancing skulls and a ballerina to a fractal tree and a retro cassette deck.

Built as the final project for an Introduction to Programming II course.

## Visualisations

| # | Name | What it does |
|---|------|--------------|
| 1 | **Introduction** | Title screen showing how to navigate with the arrow keys |
| 2 | **Skull Sonic** | A grid of skulls that scale with the music's volume. Press `A`, `B` or `C` to switch skull styles. |
| 3 | **Musical Ballerina** | A circular waveform with a ballerina that travels around it and switches between poses |
| 4 | **Bouncing Coffee Cup** | A coffee cup and text that bounce and scale with the volume over a slideshow of background photos |
| 5 | **Harmony of Branches** | A recursive fractal tree: high-frequency energy sets its depth, and volume sets branch size and angle |
| 6 | **Hanging Lines** | Lines and circles that drop and grow with different frequency bands |
| 7 | **Dancing Emotions** | Five stick figures (Sadness, Embarrassment, Disgust, Fear, Anxiety) under a disco ball. Each one jumps and gets a spotlight when its frequency range is active. |
| 8 | **Vintage Retro Cassette** | A cassette player whose speakers pulse and decks spin with the bass, with a smoothed mirrored waveform and floating music notes |
| 9 | **Rectangle Illusion** | Rectangles that spawn with the volume, then grow and fade outward for an optical-illusion effect |

## Controls

| Input | Action |
|-------|--------|
| Click the **▶ button** (top-left) | Play / pause the music |
| Click anywhere else | Toggle fullscreen |
| `→` Right arrow | Next visualisation |
| `←` Left arrow | Previous visualisation |
| `Space` | Show / hide the visualisation menu |
| `A` / `B` / `C` | Change skull style (Skull Sonic only) |

## Running the App

The app loads music and images, so it has to be served over a local web server. Opening `index.html` directly from the file system won't work.

### Quick start (one command)

**Step 1:** Run this command in the terminal first. It downloads the project from GitHub into a temporary folder and starts a local web server:

```bash
D=$(mktemp -d) && gh repo clone Alizea2/Music-Visualizer "$D" && cd "$D" && python3 -m http.server 8000
```

**Step 2:** Once the terminal shows `Serving HTTP on ... port 8000`, click this link to open the visualizer in your browser:

**<http://localhost:8000>**

Then click the **▶ button** in the top-left corner to start the music.

Keep the terminal open while you use it. When you're done, press `Ctrl + C` in the terminal to stop the server.

> This needs the [GitHub CLI](https://cli.github.com/) (`gh`) signed in to an account that can access this repository, and Python 3.

### Other ways to run it

From inside the project folder:

**VS Code:** install the *Live Server* extension, right-click `index.html`, and choose **Open with Live Server**.

**Python:**

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## How It Works

- `sketch.js` sets up the canvas, the `p5.FFT` and `p5.Amplitude` analysers, and registers each visualisation.
- `visualisations.js` is a container that stores the visualisations and tracks which one is selected.
- `controlsAndInput.js` handles the playback button, fullscreen, the menu and arrow-key navigation.
- Each visualisation is a constructor function with a `name` and a `draw()` method. Inside `draw()` it reads `fourier.analyze()`, `fourier.getEnergy()` or `amplitude.getLevel()` to animate its shapes.

## Project Structure

| File / Folder | Purpose |
|---------------|---------|
| `index.html` | Loads the libraries and scripts |
| `sketch.js` | Setup, draw loop and input forwarding |
| `controlsAndInput.js` | Menu, keyboard and mouse controls |
| `playbackButton.js` | Play / pause button |
| `visualisations.js` | Visualisation container |
| `Intro.js`, `Skull.js`, `Ballerina.js`, `CoffeeCup.js`, `FractalTree.js`, `hangingLines.js`, `Disco.js`, `Retro.js`, `rectangle.js` | The visualisations |
| `assets/` | Music, images and the disco ball |
| `lib/` | p5.js and p5.sound |
| `figures/` | Reference images from the original course template |
| `Documents/` | Class diagram, Gantt chart, project logs and design diagrams |

## Author

[@Alizea2](https://github.com/Alizea2)
