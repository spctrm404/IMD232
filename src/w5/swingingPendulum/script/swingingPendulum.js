// Original Code from: https://editor.p5js.org/natureofcode/sketches/MQZWruTlD
// Daniel Shiffman
// The Nature of Code
// Example 3-11: Swinging Pendulum

//Modified by OO-SUNG SON (spctrm404)

let pendulum;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  // Make a new Pendulum with an origin position and armlength
  pendulum = new Pendulum(width / 2, 0, height / 2);
}

function draw() {
  background(255);
  pendulum.update();
  pendulum.display();

  pendulum.drag(); // for user interaction
}

function mousePressed() {
  pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
  pendulum.stopDragging();
}
