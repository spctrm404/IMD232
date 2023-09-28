// Original Code from: https://editor.p5js.org/natureofcode/sketches/EFCfyH88E
// Daniel Shiffman
// The Nature of Code
// Example 3-1: Angular Motion Using rotate()

//Modified by OO-SUNG SON (spctrm404)

let angle = 0;
let angularVelocity = 0;
// let angularAcceleration = (TAU / 360) * 0.01;
let angularAcceleration;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  angularAcceleration = (TAU / 360) * 0.01;
}

function draw() {
  background(255);

  angularVelocity += angularAcceleration;
  angle += angularVelocity;

  translate(width / 2, height / 2);
  rotate(angle);

  fill(127);
  stroke(0);
  strokeWeight(1);
  line(-50, 0, 50, 0);

  strokeWeight(2);
  fill(127);
  circle(50, 0, 16);
  circle(-50, 0, 16);
}
