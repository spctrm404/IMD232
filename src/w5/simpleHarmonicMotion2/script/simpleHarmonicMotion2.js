// Original Code from: https://editor.p5js.org/natureofcode/sketches/gwdC8X-W-j
// Daniel Shiffman
// The Nature of Code
// Example 3-6: Simple Harmonic Motion II

//Modified by OO-SUNG SON (spctrm404)

// const period = 120;
let angle = 0;
let angleVel;
const amplitude = 200;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  angleVel = (TAU / 360) * 1.5;
}

function draw() {
  background(255);
  angle += angleVel;
  const x = amplitude * sin(angle);

  stroke(0);
  strokeWeight(2);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
}
