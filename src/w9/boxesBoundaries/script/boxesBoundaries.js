// Original Code from: https://editor.p5js.org/natureofcode/sketches/WSoUy03ph
// Daniel Shiffman
// The Nature of Code
// Example 6-3: Falling Boxes Hitting Boundaries

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

// A reference to the matter physics engine
let engine;

// An array for all boxes
let boxes = [];

// An array for all boundaries
let boundaries = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  // Add a bunch of fixed boundaries
  boundaries.push(
    new Boundary(width / 4, height - 5, width / 2 - 50, 10, {
      restitution: 0.6,
    })
  );
  boundaries.push(
    new Boundary((3 * width) / 4, height - 50, width / 2 - 50, 10, {
      restitution: 0.6,
    })
  );
}

function draw() {
  background(255);

  // Update the engine!
  Engine.update(engine);

  // Boxes fall from the top every so often
  if (random(1) < 0.1) {
    let b = new Box(width / 2, 50, random(8, 16), random(8, 16), {
      restitution: 0.6,
    });
    b.setVelocity(p5.Vector.random2D().mult(5));
    b.setAngularVelocity(0.1);
    boxes.push(b);
  }

  // Iterate over the boxes backwards
  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].display();
    // Remove the Body from the world and the array
    if (boxes[i].checkEdge()) {
      boxes[i].removeBody();
      boxes.splice(i, 1);
    }
  }
  // Display all the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }
}
