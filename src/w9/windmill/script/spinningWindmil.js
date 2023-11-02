// Original Code from: https://editor.p5js.org/natureofcode/sketches/D96JFWc3-
// Daniel Shiffman
// The Nature of Code
// Example 6-7: Spinning Windmill

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Constraint, Body, Vector } = Matter;

let engine;

let windmill;

let boxes = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  windmill = new Windmill(width / 2, height - 50, width / 3, 10);
}

function draw() {
  background(255);

  Engine.update(engine);

  if (random(1) < 0.5) {
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

  windmill.display();
}
