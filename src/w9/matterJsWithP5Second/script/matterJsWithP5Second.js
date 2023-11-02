// Original Code from: https://editor.p5js.org/natureofcode/sketches/GXRa48IQO
// Daniel Shiffman
// The Nature of Code
// Example 6-1: Matter.js Default Render and Runner

//Modified by OO-SUNG SON (spctrm404)

const { Engine, Bodies, Composite, Body, Vector } = Matter;

let engine;
let matterRects = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  engine = Engine.create();

  let options = {
    friction: 0.01,
    restitution: 0.75,
  };
  let box = new MatterRect(100, 100, 50, 50, options);
  let v = Vector.create(5, 0);
  Body.setVelocity(box.body, v);
  Body.setAngularVelocity(box.body, 0.1);
  matterRects.push(box);

  let ground = new MatterRect(width / 2, height - 5, width, 10, {
    isStatic: true,
  });
  matterRects.push(ground);

  let runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
}

function draw() {
  background(255);

  Engine.update(engine);

  matterRects.forEach((each) => {
    each.display();
  });
}
