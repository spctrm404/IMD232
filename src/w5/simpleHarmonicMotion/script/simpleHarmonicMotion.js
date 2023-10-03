// Original Code from: https://editor.p5js.org/natureofcode/sketches/O8LMHH-Df
// Daniel Shiffman
// The Nature of Code
// Example 3-5: Simple Harmonic Motion

//Modified by OO-SUNG SON (spctrm404)

const period = 120;
const amplitude = 200;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background(255);

  const x = amplitude * sin((TAU * frameCount) / period);

  stroke(0);
  strokeWeight(2);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
}
