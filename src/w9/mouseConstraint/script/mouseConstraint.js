// Original Code from: https://editor.p5js.org/natureofcode/sketches/mTRKgn44p
// Daniel Shiffman
// The Nature of Code
// Example 6-8: MouseConstraint Demonstration

//Modified by OO-SUNG SON (spctrm404)

const {
  Engine,
  Bodies,
  Composite,
  Constraint,
  Vector,
  Mouse,
  MouseConstraint,
} = Matter;

// A reference to the matter physics engine
let engine;

let boxes = [];
let boundaries = [];

let mouse, mouseConstraint;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  pixelDensity(1);

  boundaries.push(new Boundary(width / 2, height - 5, width, 10, {}));
  boundaries.push(new Boundary(width / 2, 5, width, 10, {}));
  boundaries.push(new Boundary(5, height / 2, 10, height, {}));
  boundaries.push(new Boundary(width - 5, height / 2, 10, height, {}));

  boxes.push(new Box(300, height / 2, 48, 48, { restitution: 0.6 }));
  boxes.push(new Box(400, height / 2, 48, 48, { restitution: 0.6 }));

  mouse = Mouse.create(canvas.elt);
  let options = {
    mouse: mouse,
    constraint: {
      stiffness: 1,
    },
  };
  mouseConstraint = MouseConstraint.create(engine, options);
  Composite.add(engine.world, mouseConstraint);
}

function draw() {
  background(255);

  Engine.update(engine);

  boxes.forEach((each) => {
    each.display();
  });

  boundaries.forEach((each) => {
    each.display();
  });
}
