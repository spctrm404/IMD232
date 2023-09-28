// Original Code from: https://editor.p5js.org/natureofcode/sketches/qe6oK9F1o
// Daniel Shiffman
// The Nature of Code
// Example 3-9: The Wave

//Modified by OO-SUNG SON (spctrm404)

let startAngle = 0;
let angleVelocity = 0.2;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
}

function draw() {
  background(255);

  let angle = startAngle;
  startAngle += 0.02;

  for (let x = 0; x <= width; x += 24) {
    let y = map(sin(angle), -1, 1, 0, height);
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(x, y, 48);
    angle += angleVelocity;
  }
}
