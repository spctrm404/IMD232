// Original Code from: https://editor.p5js.org/natureofcode/sketches/CQ19Yw0iT
// Daniel Shiffman
// The Nature of Code
// Example 3-8: Static Wave

//Modified by OO-SUNG SON (spctrm404)

let angle = 0;
let angleVel = 0.2;
let amplitude = 100;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  stroke(0);
  strokeWeight(2);
  fill(127, 127);

  for (let x = 0; x <= width; x += 24) {
    let y = amplitude * sin(angle);
    circle(x, y + height / 2, 48);
    angle += angleVel;
  }
}
