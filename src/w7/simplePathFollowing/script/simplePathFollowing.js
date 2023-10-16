// Original Code from: https://editor.p5js.org/natureofcode/sketches/zcH21K3T3
// Daniel Shiffman
// The Nature of Code
// Example 5-5: Simple Path Following

//Modified by OO-SUNG SON (spctrm404)

let debug = true;
let path;
let vehicle1, vehicle2;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  path = new Path();

  vehicle1 = new Vehicle(0, height / 2, 1, 2, 0.02);
  vehicle2 = new Vehicle(0, height / 2, 1, 3, 0.05);
}

function draw() {
  background(255);

  path.display();

  vehicle1.follow(path);
  vehicle2.follow(path);

  vehicle1.update();
  vehicle1.display();
  vehicle2.update();
  vehicle2.display();

  vehicle1.borders(path);
  vehicle2.borders(path);
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}
