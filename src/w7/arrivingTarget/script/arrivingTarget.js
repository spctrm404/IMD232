// Original Code from: https://editor.p5js.org/natureofcode/sketches/v-yJm8WUx
// Daniel Shiffman
// The Nature of Code
// Example 5-2: Arriving at a Target

//Modified by OO-SUNG SON (spctrm404)

let vehicle;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  vehicle = new Vehicle(width / 2, height / 2, 1, 6, 4, 0.1, 100);
  mVec = createVector();
}

function draw() {
  background(255);

  mVec.set(mouseX, mouseY);

  fill(127);
  stroke(0);
  strokeWeight(2);
  circle(mVec.x, mVec.y, 48);

  vehicle.seek(mVec);
  vehicle.update();
  vehicle.display();
}
