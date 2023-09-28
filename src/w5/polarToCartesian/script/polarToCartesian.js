// Original Code from: https://editor.p5js.org/natureofcode/sketches/qcnlfvP3q
// Daniel Shiffman
// The Nature of Code
// Example 3-4: Polar to Cartesian

//Modified by OO-SUNG SON (spctrm404)

let rad;
let angle;
// let angleVel = (TAU / 360) * 0.5;
let angleVel;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rad = height * 0.4;
  angle = 0;
  angleVel = (TAU / 360) * 0.5;
}

function draw() {
  background(255);

  // Translate the origin point to the center of the screen
  translate(width / 2, height / 2);

  // Convert polar to cartesian
  let x = rad * cos(angle);
  let y = rad * sin(angle);

  // Draw the ellipse at the cartesian coordinate
  fill(127);
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  circle(x, y, 48);

  // Increase the angle over time
  angle += angleVel;
}
