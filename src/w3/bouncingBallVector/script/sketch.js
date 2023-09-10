// Original Code from: https://editor.p5js.org/natureofcode/sketches/qU5oPJijX
// Daniel Shiffman
// The Nature of Code
// Example 1-2: Bouncing Ball, with p5.Vector!

//Modified by OO-SUNG SON (spctrm404)

let position;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // Note how createVector() has to be called inside of setup().
  position = createVector(100, 100);
  velocity = createVector(2.5, 2);
}

function draw() {
  background(255);
  position.add(velocity);

  // We still sometimes need to refer to the individual components of a p5.Vector and can do so using the dot syntax: position.x, velocity.y, etc.
  if (position.x > width || position.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  circle(position.x, position.y, 48);
}
