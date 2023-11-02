// Original Code from: https://editor.p5js.org/natureofcode/sketches/xxYF4I5bi
// Daniel Shiffman
// The Nature of Code
// Example 6-5: Multiple Shapes on One Body

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;

let maracas = [];
let boundaries = [];

let debug = false;

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
    let m = new Maraca(width / 2, 50, 24, 4, 8, {
      restitution: 0.2,
    });
    m.setVelocity(p5.Vector.random2D().mult(5));
    m.setAngularVelocity(0.1);
    maracas.push(m);
  }

  for (let idx = maracas.length - 1; idx >= 0; idx--) {
    if (debug) {
      maracas[idx].displayWrong();
    } else {
      maracas[idx].display();
    }
    if (maracas[idx].checkEdge()) {
      maracas[idx].removeBody();
      maracas.splice(idx, 1);
    }
  }

  boundaries.forEach((each) => {
    each.display();
  });
}

function mousePressed() {
  debug = !debug;
}
