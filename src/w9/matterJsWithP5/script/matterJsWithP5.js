// Original Code from: https://editor.p5js.org/natureofcode/sketches/GXRa48IQO
// Daniel Shiffman
// The Nature of Code
// Example 6-1: Matter.js Default Render and Runner

//Modified by OO-SUNG SON (spctrm404)

class MatterBody {
  constructor(matterBody, w, h) {
    this.w = w;
    this.h = h;
    this.matterBody = matterBody;
  }

  display() {
    const pos = this.matterBody.position;
    const angle = this.matterBody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;
let boxP5;
let boundaryP5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  let options = {
    friction: 0.01,
    restitution: 0.75,
  };
  let box = Bodies.rectangle(100, 100, 50, 50, options);
  let v = Vector.create(5, 0);
  Body.setVelocity(box, v);
  Body.setAngularVelocity(box, 0.1);
  Composite.add(engine.world, box);
  console.log(box);
  boxP5 = new MatterBody(box, 50, 50);

  let ground = Bodies.rectangle(width / 2, height - 5, width, 10, {
    isStatic: true,
  });
  Composite.add(engine.world, ground);
  boundaryP5 = new MatterBody(ground, width, 10);

  let runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
}

function draw() {
  background(255);

  Engine.update(engine);

  boxP5.display();
  boundaryP5.display();
}
