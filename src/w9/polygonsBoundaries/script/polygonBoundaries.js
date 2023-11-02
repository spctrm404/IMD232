// Original Code from: https://editor.p5js.org/natureofcode/sketches/o3-Qpqu2i
// Daniel Shiffman
// The Nature of Code
// Example 6-4: Polygon Shapes

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;

let polygons = [];
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
    let p = new Polygon(width / 2, 50, {
      restitution: 0.2,
    });
    p.setVelocity(p5.Vector.random2D().mult(5));
    p.setAngularVelocity(0.1);
    polygons.push(p);
  }

  for (let idx = polygons.length - 1; idx >= 0; idx--) {
    polygons[idx].display();
    if (polygons[idx].checkEdge()) {
      polygons[idx].removeBody();
      polygons.splice(idx, 1);
    }
  }

  boundaries.forEach((each) => {
    each.display();
  });
}
