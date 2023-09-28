// Original Code from: https://editor.p5js.org/natureofcode/sketches/xj2C2Ldbo
// Daniel Shiffman
// The Nature of Code
// Example 3-2: Forces with (Arbitrary) Angular Motion

//Modified by OO-SUNG SON (spctrm404)

let movers = [];
let attractor;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 20; i++) {
    movers.push(new Mover(random(width), random(height), random(1, 5)));
  }

  attractor = new Attractor();
}

function draw() {
  background(255);
  attractor.display();
  movers.forEach((eachMover) => {
    const force = attractor.attract(eachMover);
    eachMover.applyForce(force);
    eachMover.update();
    eachMover.display();
  });
}
