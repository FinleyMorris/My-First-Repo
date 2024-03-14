let customFont;

function preload() {
  customFont = loadFont('ka1.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(customFont); // Set the custom font
  textColor = color(250, 217, 85); // Initial color
}

function draw() {
  background(7, 8, 7);
  displayEndScreen();
}

function displayEndScreen() {
  textAlign(CENTER);
  noStroke();
  textSize(150);
  fill(textColor); // makes the color dynamic 

  //  color change using sin function
  let delta = sin(frameCount * 0.05) * 128; // makes the color change color over time
  textColor = color(250, 217 + delta, 85 - delta);

  text('YOU WON', width / 2, height / 2 - 20);
}
