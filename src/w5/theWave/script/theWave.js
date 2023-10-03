// Original Code from: https://editor.p5js.org/natureofcode/sketches/qe6oK9F1o
// Daniel Shiffman
// The Nature of Code
// Example 3-9: The Wave

//Modified by OO-SUNG SON (spctrm404)

let angle = 0;
let angleStart = 0;
let angleStartAdd = 0;
const angleVel = 0.2;
const amplitude = 100;
const gap = 20;
const rad = 10;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background(255);

  angleStartAdd = (TAU / 360) * 1;
}

function draw() {
  background(255);

  angle = angleStart;

  stroke(0);
  strokeWeight(2);
  fill(127, 127);

  for (let x = 0; x <= width; x += gap) {
    let y = map(sin(angle), -1, 1, 0, height - 1);
    circle(x, y, 2 * rad);
    angle += angleVel;
  }

  angleStart += angleStartAdd;
}
