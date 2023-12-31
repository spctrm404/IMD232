// Original Code from: https://editor.p5js.org/natureofcode/sketches/WSoUy03ph
// Daniel Shiffman
// The Nature of Code
// Example 6-3: Falling Boxes Hitting Boundaries

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;

let boxes = [];
let boundaries = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

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

  Engine.update(engine);

  if (random(1) < 0.1) {
    let b = new Box(width / 2, 50, random(8, 16), random(8, 16), {
      restitution: 0.6,
    });
    b.setVelocity(p5.Vector.random2D().mult(5));
    b.setAngularVelocity(0.1);
    boxes.push(b);
  }

  for (let idx = boxes.length - 1; idx >= 0; idx--) {
    boxes[idx].display();
    if (boxes[idx].checkEdge()) {
      boxes[idx].removeBody();
      boxes.splice(idx, 1);
    }
  }

  boundaries.forEach((each) => {
    each.display();
  });
}
