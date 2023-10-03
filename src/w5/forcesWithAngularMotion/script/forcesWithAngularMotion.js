// Original Code from: https://editor.p5js.org/natureofcode/sketches/xj2C2Ldbo
// Daniel Shiffman
// The Nature of Code
// Example 3-2: Forces with (Arbitrary) Angular Motion

//Modified by OO-SUNG SON (spctrm404)

const movers = [];
let attractor;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  for (let i = 0; i < 10; i++) {
    const randomPos = p5.Vector.random2D();
    randomPos.mult(width / 4);
    randomPos.add(width / 2, height / 2);
    const mass = random(4, 100);
    movers.push(new Mover(randomPos.x, randomPos.y, mass));
  }

  const attractorPos = createVector(width / 2, height / 2);
  const attractorMass = 100;
  const attractorRad = 25;
  const attractDistMin = 25;
  const attractDistMax = 100;
  attractor = new Attractor(
    attractorPos.x,
    attractorPos.y,
    attractorMass,
    attractorRad,
    attractDistMin,
    attractDistMax
  );
}

function draw() {
  background(255);
  attractor.display();
  movers.forEach((eachMover) => {
    const force = attractor.attract(eachMover);
    eachMover.applyForce(force);
    eachMover.update();
    eachMover.display();
    eachMover.displayVectors();
  });
}
